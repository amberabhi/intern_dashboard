import { useState, useEffect } from "react";
const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    // Fetch leaderboard data from the backend
    fetch("http://localhost:8000/api/leaderboard/")
      .then((res) => res.json())
      .then((data) => setLeaders(data))
      .catch((err) => console.error("Error fetching leaderboard:", err));
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-yellow-400">
          🏆 Leaderboard
        </h1>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <table className="w-full text-sm sm:text-base">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left py-3 px-4">Rank</th>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-right py-3 px-4">Donations (₹)</th>
              </tr>
            </thead>
            <tbody>
              {leaders.length > 0 ? (
                leaders
                  .sort((a, b) => b.donations - a.donations)
                  .map((person, idx) => {
                    let rowClass = "";
                    if (idx === 0) rowClass = "bg-yellow-800 text-yellow-200";
                    else if (idx === 1) rowClass = "bg-gray-700 text-white";
                    else if (idx === 2) rowClass = "bg-yellow-100 text-black";
                    return (
                      <tr
                        key={idx}
                        className={`border-t border-gray-700 hover:bg-gray-700 transition ${rowClass}`}
                      >
                        <td className="py-3 px-4 font-semibold">#{idx + 1}</td>
                        <td className="py-3 px-4">{person.name}</td>
                        <td className="py-3 px-4 text-right font-bold">
                          ₹{person.donations}
                        </td>
                      </tr>
                    );
                  })
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-400">
                    No data yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          * Top 3 donors are highlighted
        </p>
      </div>
    </div>
  );
};
export default Leaderboard;