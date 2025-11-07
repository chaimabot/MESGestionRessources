import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const data = [
    { name: "00:00", utilization: 65 },
    { name: "04:00", utilization: 70 },
    { name: "08:00", utilization: 85 },
    { name: "12:00", utilization: 90 },
    { name: "16:00", utilization: 88 },
    { name: "20:00", utilization: 75 },
    { name: "24:00", utilization: 68 },
  ];

  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1">
        <Header />
        {/* Page Content */}
        <div className="p-10">
          <div className="mb-8">
            <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Dashboard
            </p>
            <p className="text-gray-500 dark:text-[#9dabb9] text-base font-normal leading-normal mt-2">
              Central hub for resource overview and quick navigation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="flex flex-col justify-between gap-4 rounded-xl p-6 bg-white dark:bg-[#111418] border border-gray-200 dark:border-[#3b4754] hover:border-primary dark:hover:border-primary transition-colors cursor-pointer"
              onClick={() => navigate("/machines")}
            >
              <div>
                <p className="text-gray-600 dark:text-white text-base font-medium leading-normal">
                  Machines
                </p>
                <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">
                  75/100
                </p>
                <p className="text-gray-500 dark:text-[#9dabb9] text-sm">
                  Online
                </p>
              </div>
              <div className="flex items-center text-primary text-sm font-medium">
                <span>View Machines</span>
                <span className="material-symbols-outlined text-base ml-1">
                  arrow_forward
                </span>
              </div>
            </div>
            <div
              className="flex flex-col justify-between gap-4 rounded-xl p-6 bg-white dark:bg-[#111418] border border-gray-200 dark:border-[#3b4754] hover:border-primary dark:hover:border-primary transition-colors cursor-pointer"
              onClick={() => navigate("/breakdowns")}
            >
              <div>
                <p className="text-gray-600 dark:text-white text-base font-medium leading-normal">
                  Active Breakdowns
                </p>
                <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">
                  5
                </p>
                <p className="text-red-500 dark:text-[#fa6238] text-sm">
                  High Priority
                </p>
              </div>
              <div className="flex items-center text-primary text-sm font-medium">
                <span>View Breakdowns</span>
                <span className="material-symbols-outlined text-base ml-1">
                  arrow_forward
                </span>
              </div>
            </div>
            <div
              className="flex flex-col justify-between gap-4 rounded-xl p-6 bg-white dark:bg-[#111418] border border-gray-200 dark:border-[#3b4754] hover:border-primary dark:hover:border-primary transition-colors cursor-pointer"
              onClick={() => navigate("/interventions")}
            >
              <div>
                <p className="text-gray-600 dark:text-white text-base font-medium leading-normal">
                  Interventions
                </p>
                <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">
                  12
                </p>
                <p className="text-gray-500 dark:text-[#9dabb9] text-sm">
                  Scheduled / In Progress
                </p>
              </div>
              <div className="flex items-center text-primary text-sm font-medium">
                <span>View Interventions</span>
                <span className="material-symbols-outlined text-base ml-1">
                  arrow_forward
                </span>
              </div>
            </div>
            <div
              className="flex flex-col justify-between gap-4 rounded-xl p-6 bg-white dark:bg-[#111418] border border-gray-200 dark:border-[#3b4754] hover:border-primary dark:hover:border-primary transition-colors cursor-pointer"
              onClick={() => navigate("/stocks")}
            >
              <div>
                <p className="text-gray-600 dark:text-white text-base font-medium leading-normal">
                  Stock Level
                </p>
                <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">
                  3
                </p>
                <p className="text-yellow-500 text-sm">Critical Alerts</p>
              </div>
              <div className="flex items-center text-primary text-sm font-medium">
                <span>View Stock</span>
                <span className="material-symbols-outlined text-base ml-1">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-white dark:bg-[#111418] border border-gray-200 dark:border-[#3b4754] rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Machine Utilization
                  </h3>
                  <button
                    className="text-primary text-sm font-medium flex items-center hover:underline"
                    onClick={() => navigate("/alerts")}
                  >
                    <span>View Analytics</span>
                    <span className="material-symbols-outlined text-base ml-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
                <ResponsiveContainer width="100%" height={256}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#111418",
                        border: "1px solid #3b4754",
                        borderRadius: "8px",
                        color: "#ffffff",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="utilization"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                      activeDot={{
                        r: 6,
                        stroke: "#3b82f6",
                        strokeWidth: 2,
                        fill: "#ffffff",
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white dark:bg-[#111418] border border-gray-200 dark:border-[#3b4754] rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-left"
                    onClick={() => navigate("/operators")}
                  >
                    <span className="material-symbols-outlined text-primary">
                      groups
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        Operator Management
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Manage operators &amp; shifts
                      </p>
                    </div>
                  </button>
                  <button
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-left"
                    onClick={() => navigate("/alerts")}
                  >
                    <span className="material-symbols-outlined text-primary">
                      analytics
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        Production Statistics
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        View performance data
                      </p>
                    </div>
                  </button>
                  <button
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-left"
                    onClick={() => navigate("/machines")}
                  >
                    <span className="material-symbols-outlined text-primary">
                      precision_manufacturing
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        Machine Management
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        View full machine list
                      </p>
                    </div>
                  </button>
                  <button
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-left"
                    onClick={() => navigate("/stocks")}
                  >
                    <span className="material-symbols-outlined text-primary">
                      inventory_2
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        Stock Management
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Manage inventory levels
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-[#111418] border border-gray-200 dark:border-[#3b4754] rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  System Alerts
                </h3>
                <button
                  className="text-primary text-sm font-medium flex items-center hover:underline"
                  onClick={() => navigate("/alerts")}
                >
                  <span>View All</span>
                  <span className="material-symbols-outlined text-base ml-1">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex items-center justify-center size-6 rounded-full bg-red-500/10 text-red-500">
                    <span className="material-symbols-outlined text-base">
                      error
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      Machine M-05: Overheating
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2 min ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex items-center justify-center size-6 rounded-full bg-yellow-500/10 text-yellow-500">
                    <span className="material-symbols-outlined text-base">
                      warning
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      Low Stock: Part #XYZ-123
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      15 min ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex items-center justify-center size-6 rounded-full bg-blue-500/10 text-blue-500">
                    <span className="material-symbols-outlined text-base">
                      info
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      Maintenance on M-12 scheduled
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      45 min ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex items-center justify-center size-6 rounded-full bg-red-500/10 text-red-500">
                    <span className="material-symbols-outlined text-base">
                      error
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      Pressure drop on Line 3
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      1 hour ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex items-center justify-center size-6 rounded-full bg-yellow-500/10 text-yellow-500">
                    <span className="material-symbols-outlined text-base">
                      warning
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      QC Sample #S-98 Failed
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
