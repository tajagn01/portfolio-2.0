import React, { useEffect, useState } from 'react';

export default function GitHubContribProgress({ username }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // Fetch contributions for the last year (default behavior of the API with y=last)
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (!res.ok) throw new Error('Failed to fetch data');
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (loading) return <div className="text-white p-4">Loading contributions...</div>;

  // Calculate total for the last year
  const totalContributions = data?.total?.lastYear || 0;

  // Prepare grid data
  const contributions = data?.contributions || [];
  // GitHub starts on Sunday (0)
  const startDay = contributions.length > 0 ? new Date(contributions[0].date).getDay() : 0;
  const paddedContributions = Array(startDay).fill(null).concat(contributions);

  // Helper to get month labels
  const renderMonthLabels = () => {
    const months = [];
    let currentMonth = -1;
    
    paddedContributions.forEach((day, index) => {
      if (!day) return;
      const date = new Date(day.date);
      const month = date.getMonth();
      const weekIndex = Math.floor(index / 7);
      
      if (month !== currentMonth) {
        // Only add if enough space from last label (at least 2 weeks)
        const lastMonth = months[months.length - 1];
        if (!lastMonth || (weekIndex - lastMonth.weekIndex) > 2) {
          months.push({ month, weekIndex });
          currentMonth = month;
        }
      }
    });

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return (
      <div className="flex relative h-6 mb-2 text-xs text-gray-400">
        {months.map((m, i) => (
          <span 
            key={i} 
            style={{ left: `${m.weekIndex * 13}px`, position: 'absolute' }} 
          >
            {monthNames[m.month]}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto text-white">
      <div className="mb-6">
        <div className="text-gray-500 text-sm font-medium mb-1">Featured</div>
        <h2 className="text-3xl font-bold mb-2">GitHub Activity</h2>
        <div className="text-gray-400 text-sm font-medium">
          Total: <span className="text-white font-bold">{totalContributions} contributions</span>
        </div>
      </div>

      <div className="border border-gray-800 rounded-xl p-6 bg-[#0d1117] w-fit max-w-full overflow-x-auto">
        <div className="flex min-w-max">
        {/* Day Labels */}
        <div className="flex flex-col gap-[3px] pt-8 pr-2 text-[10px] text-gray-400 leading-[10px]">
          <div className="h-[10px]"></div> {/* Sun */}
          <div className="h-[10px]">Mon</div>
          <div className="h-[10px]"></div> {/* Tue */}
          <div className="h-[10px]">Wed</div>
          <div className="h-[10px]"></div> {/* Thu */}
          <div className="h-[10px]">Fri</div>
          <div className="h-[10px]"></div> {/* Sat */}
        </div>

        {/* The Grid */}
        <div>
          {renderMonthLabels()}
          <div className="inline-grid grid-flow-col gap-[3px] grid-rows-7">
            {paddedContributions.map((day, i) => {
              if (!day) return <div key={`empty-${i}`} className="w-[10px] h-[10px]" />;
              
              return (
                <div
                  key={day.date}
                  title={`${day.count} contributions on ${day.date}`}
                  className={`w-[10px] h-[10px] rounded-sm ${
                    day.count === 0 ? 'bg-[#161b22]' :
                    day.count <= 3 ? 'bg-[#0e4429]' :
                    day.count <= 6 ? 'bg-[#006d32]' :
                    day.count <= 9 ? 'bg-[#26a641]' :
                    'bg-[#39d353]'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer: Legend */}
      <div className="flex items-center justify-end mt-4 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <span>Less</span>
          <div className="w-[10px] h-[10px] bg-[#161b22] rounded-sm"></div>
          <div className="w-[10px] h-[10px] bg-[#0e4429] rounded-sm"></div>
          <div className="w-[10px] h-[10px] bg-[#006d32] rounded-sm"></div>
          <div className="w-[10px] h-[10px] bg-[#26a641] rounded-sm"></div>
          <div className="w-[10px] h-[10px] bg-[#39d353] rounded-sm"></div>
          <span>More</span>
        </div>
      </div>
    </div>
    </div>
  );
}



/*
  ----------------------
  Example serverless function (Node/Express / Netlify / Vercel handler)
  Save as: ./api/github-contrib.js (adjust for your platform)
  ----------------------

  // Node / Express example
  const express = require('express');
  const fetch = require('node-fetch');
  const app = express();

  // Ensure you set GITHUB_TOKEN in your server env (PAT with no special scopes required for public profile data).
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  app.get('/api/github-contrib', async (req, res) => {
    const username = req.query.username;
    if (!username) return res.status(400).json({ error: 'username required' });

    try {
      // GraphQL query to get contribution calendar totals
      const body = JSON.stringify({
        query: `query($login:String!, $from:DateTime, $to:DateTime) {
          user(login: $login) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays { date, contributionCount }
                }
              }
            }
          }
        }`,
        variables: { login: username }
      });

      const resp = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
        body
      });

      const j = await resp.json();
      const cal = j.data.user.contributionsCollection.contributionCalendar;
      const days = cal.weeks.flatMap(w => w.contributionDays.map(d => ({ date: d.date, count: d.contributionCount })));
      res.json({ totalContributions: cal.totalContributions, days, year: new Date().getFullYear() });
    } catch (err) {
      res.status(500).json({ error: String(err) });
    }
  });

  module.exports = app;

  ----------------------
  Notes:
  - Use this server function (or a serverless variant) to avoid exposing your token and to bypass CORS.
  - If you prefer not to use GraphQL, you can fetch and parse the contributions SVG on the server (https://github.com/users/:username/contributions) — the server can fetch it without CORS.

  Deployment tips:
  - Vercel / Netlify: add an API route that runs the code above and set the GITHUB_TOKEN env var.
  - GitHub token: a fine-grained PAT is fine; for public profile data a classic token with no scopes also works for GraphQL read-only queries.

  Styling:
  - This component uses Tailwind classes but will work with plain CSS; replace classes if you don't use Tailwind.

  Accessibility:
  - The progress bar should include ARIA attributes if you want better screen-reader support; you can wrap the bar in a role="progressbar" and aria-valuenow/aria-valuemin/aria-valuemax.
*/
