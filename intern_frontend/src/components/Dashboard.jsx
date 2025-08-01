import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [intern, setIntern] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/api/intern/")
      .then((res) => res.json())
      .then((data) => setIntern(data))
      .catch((err) => console.error("Failed to fetch intern data:", err));
  }, []);
  const copyReferral = () => {
    navigator.clipboard.writeText(intern?.referralCode);
    alert("Referral code copied!");
  };
  if (!intern) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading intern data...</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-600 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-100 mb-6">👋 Welcome, {intern.name}</h1>
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Profile + Stats */}
          <div className="col-span-1 bg-white rounded-xl p-5 shadow-md space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-semibold text-gray-600">
                {intern.name[0]}
              </div>
            </div>
            <div className="text-center space-y-1">
              <p className="text-xl font-semibold">{intern.name}</p>
              <p className="text-sm text-gray-500">Intern at YourOrg</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm">Your Referral Code</p>
              <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md mt-1">
                <span className="text-sm font-mono">{intern.referralCode}</span>
                <button
                  onClick={copyReferral}
                  className="text-blue-500 text-sm hover:underline"
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm mb-1">Total Donations Raised</p>
              <div className="text-2xl font-bold text-green-600">₹{intern.totalDonations}</div>
              {/* Progress bar (bonus visual) */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${Math.min((intern.totalDonations / 5000) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">Goal: ₹5000</p>
            </div>
          </div>
          {/* Right Column - Rewards */}
          <div className="col-span-2 bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">🎁 Unlockable Rewards</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {intern.rewards.map((reward, index) => (
                <li
                  key={index}
                  className="bg-gray-50 border rounded-md p-4 text-center text-gray-700 font-medium shadow-sm hover:bg-gray-100"
                >
                  {reward}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-6">
        <button
            onClick={() => navigate("/leaderboard")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
        >
            🏆 View Leaderboard
        </button>
        </div>

        {/* Footer*/}
        <div className="text-center text-xs text-gray-400 mt-12">
          © 2025 Intern Dashboard. Built By Abhi_Amber.
        </div>
      </div>
    </div>
  );
};
export default Dashboard;