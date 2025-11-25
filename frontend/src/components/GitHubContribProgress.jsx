import React, { useEffect, useState } from 'react';

export default function GitHubContribProgress({ username, darkMode }) {
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
  if (loading) return <div className={`${darkMode ? "text-white" : "text-black"} p-4`}>Loading contributions...</div>;

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
      <div className={`flex relative h-6 mb-2 text-xs ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
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
    <div className={`w-full max-w-3xl mx-auto ${darkMode ? "text-white" : "text-black"}`}>
      <div className="mb-6">
        <div className={`${darkMode ? "text-gray-500" : "text-gray-800"} text-sm font-medium mb-1`}>Featured</div>
        <h2 className="text-3xl font-bold mb-2">GitHub Activity</h2>
        <div className={`${darkMode ? "text-gray-400" : "text-gray-800"} text-sm font-medium`}>
          Total: <span className={`${darkMode ? "text-white" : "text-black"} font-bold`}>{totalContributions} contributions</span>
        </div>
      </div>

      <div className={` border border-dashed
  border-amber-50   p-6 w-fit max-w-full overflow-x-auto ${darkMode ? "border-gray-800 bg-[#0d1117] shadow-none" : "border-gray-300 bg-white shadow-sm"}`}>
        <div className="flex min-w-max">
        {/* Day Labels */}
        <div className={`flex flex-col gap-[3px] pt-8 pr-2 text-[10px] leading-[10px] ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
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
                    day.count === 0 ? (darkMode ? 'bg-[#161b22]' : 'bg-[#ebedf0]') :
                    day.count <= 3 ? (darkMode ? 'bg-[#0e4429]' : 'bg-[#9be9a8]') :
                    day.count <= 6 ? (darkMode ? 'bg-[#006d32]' : 'bg-[#40c463]') :
                    day.count <= 9 ? (darkMode ? 'bg-[#26a641]' : 'bg-[#30a14e]') :
                    (darkMode ? 'bg-[#39d353]' : 'bg-[#216e39]')
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer: Legend */}
      <div className={`flex items-center justify-end mt-4 text-xs ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
        <div className="flex items-center gap-1">
          <span>Less</span>
          <div className={`w-[10px] h-[10px] rounded-sm ${darkMode ? 'bg-[#161b22]' : 'bg-[#ebedf0]'}`}></div>
          <div className={`w-[10px] h-[10px] rounded-sm ${darkMode ? 'bg-[#0e4429]' : 'bg-[#9be9a8]'}`}></div>
          <div className={`w-[10px] h-[10px] rounded-sm ${darkMode ? 'bg-[#006d32]' : 'bg-[#40c463]'}`}></div>
          <div className={`w-[10px] h-[10px] rounded-sm ${darkMode ? 'bg-[#26a641]' : 'bg-[#30a14e]'}`}></div>
          <div className={`w-[10px] h-[10px] rounded-sm ${darkMode ? 'bg-[#39d353]' : 'bg-[#216e39]'}`}></div>
          <span>More</span>
        </div>
      </div>
    </div>
    </div>
  );
}



