import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const AlertManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showToast, setShowToast] = useState(true);

  const alerts = [
    {
      id: 1,
      title: "Pressure Overload - Immediate Action Required",
      description:
        "Critical pressure levels detected in the main hydraulic press. Risk of system failure.",
      source: "Machine CNC-04B",
      timestamp: "15/10/2023 14:32",
      status: "New",
      type: "critical",
      actions: ["Mark as read", "Assign", "Resolve"],
    },
    {
      id: 2,
      title: "Sensor Offline",
      description:
        "Temperature sensor T-102 on assembly line 3 is not responding.",
      source: "System Monitor",
      timestamp: "15/10/2023 11:15",
      status: "In Progress",
      type: "warning",
      actions: ["Add Note", "Resolve"],
    },
    {
      id: 3,
      title: "Maintenance Schedule Update",
      description:
        "Routine maintenance for conveyor belt C-01 is scheduled for 16/10/2023 at 04:00 AM.",
      source: "Planning System",
      timestamp: "14/10/2023 09:00",
      status: "Read",
      type: "info",
      actions: ["Acknowledge"],
    },
    {
      id: 4,
      title: "Low Coolant Level",
      description: "Coolant reservoir for Grinder GR-02 was below 10%.",
      source: "Machine GR-02",
      timestamp: "13/10/2023 17:45",
      status: "Resolved",
      type: "success",
      resolvedBy: "J. Doe",
      resolvedAt: "13/10/2023 18:10",
    },
  ];

  const filteredAlerts = alerts.filter((alert) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Unread" && alert.status === "New") ||
      (activeTab === "Critical" && alert.type === "critical") ||
      (activeTab === "Resolved" && alert.status === "Resolved");

    const matchesSearch =
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.source.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const getTabCount = (tab: string) => {
    if (tab === "All") return alerts.length;
    if (tab === "Unread")
      return alerts.filter((a) => a.status === "New").length;
    if (tab === "Critical")
      return alerts.filter((a) => a.type === "critical").length;
    if (tab === "Resolved")
      return alerts.filter((a) => a.status === "Resolved").length;
    return 0;
  };

  const handleAction = (alertId: number, action: string) => {
    console.log(`Action "${action}" performed on alert ${alertId}`);
    // Here you would implement the actual action logic
  };

  const closeToast = () => {
    setShowToast(false);
  };
  return (
    <div
      className="relative flex min-h-screen w-full"
      style={{ backgroundColor: "#1a2431" }}
    >
      <Sidebar />
      <main className="flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto bg-slate-100 dark:bg-black/20">
          <div className="p-6 lg:p-8">
            <div className="flex flex-wrap justify-between gap-4 items-center">
              <h1 className="text-black dark:text-white text-3xl font-black leading-tight tracking-[-0.03em]">
                Alert Management
              </h1>
              <div className="flex gap-2">
                <button className="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-[#242f47] text-black dark:text-white gap-2 text-sm font-medium px-4 border border-slate-200 dark:border-transparent">
                  <span className="material-symbols-outlined text-lg">
                    filter_list
                  </span>
                  <span>Filter</span>
                </button>
                <button className="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary text-white gap-2 text-sm font-medium px-4">
                  <span className="material-symbols-outlined text-lg">
                    add_alert
                  </span>
                  <span>Create Alert</span>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div className="border-b border-slate-200 dark:border-[#334366]">
                <div className="flex gap-6">
                  <button
                    className={`flex items-center gap-2 pb-3 pt-1 ${
                      activeTab === "All"
                        ? "border-b-2 border-b-primary text-primary dark:text-white"
                        : "border-b-2 border-b-transparent text-slate-500 dark:text-[#92a4c8]"
                    }`}
                    onClick={() => setActiveTab("All")}
                  >
                    <p className="text-sm font-bold">All</p>
                  </button>
                  <button
                    className={`flex items-center gap-2 pb-3 pt-1 ${
                      activeTab === "Unread"
                        ? "border-b-2 border-b-primary text-primary dark:text-white"
                        : "border-b-2 border-b-transparent text-slate-500 dark:text-[#92a4c8]"
                    }`}
                    onClick={() => setActiveTab("Unread")}
                  >
                    <p className="text-sm font-bold">Unread</p>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary dark:bg-primary/30 dark:text-white">
                      {getTabCount("Unread")}
                    </span>
                  </button>
                  <button
                    className={`flex items-center gap-2 pb-3 pt-1 ${
                      activeTab === "Critical"
                        ? "border-b-2 border-b-primary text-primary dark:text-white"
                        : "border-b-2 border-b-transparent text-slate-500 dark:text-[#92a4c8]"
                    }`}
                    onClick={() => setActiveTab("Critical")}
                  >
                    <p className="text-sm font-bold">Critical</p>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-critical/20 text-critical dark:bg-critical/30 dark:text-white">
                      {getTabCount("Critical")}
                    </span>
                  </button>
                  <button
                    className={`flex items-center gap-2 pb-3 pt-1 ${
                      activeTab === "Resolved"
                        ? "border-b-2 border-b-primary text-primary dark:text-white"
                        : "border-b-2 border-b-transparent text-slate-500 dark:text-[#92a4c8]"
                    }`}
                    onClick={() => setActiveTab("Resolved")}
                  >
                    <p className="text-sm font-bold">Resolved</p>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-success/20 text-success dark:bg-success/30 dark:text-white">
                      {getTabCount("Resolved")}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-4">
              <label className="flex flex-col min-w-40 h-12 w-full max-w-lg">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-slate-500 dark:text-[#92a4c8] flex border border-r-0 border-slate-200 dark:border-[#242f47] bg-white dark:bg-[#242f47] items-center justify-center pl-4 rounded-l-lg">
                    <span className="material-symbols-outlined text-xl">
                      search
                    </span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-0 border border-l-0 border-slate-200 dark:border-[#242f47] bg-white dark:bg-[#242f47] h-full placeholder:text-slate-500 dark:placeholder:text-[#92a4c8] px-4 rounded-l-none pl-2 text-base font-normal leading-normal"
                    placeholder="Search by keyword, source, or date..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              {filteredAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-[#242f47] border-l-4 ${
                    alert.type === "critical"
                      ? "border-critical"
                      : alert.type === "warning"
                      ? "border-warning"
                      : alert.type === "info"
                      ? "border-info"
                      : "border-success"
                  } ${
                    alert.status === "Resolved"
                      ? "bg-white/70 dark:bg-[#242f47]/50 opacity-70"
                      : ""
                  }`}
                >
                  <span
                    className={`material-symbols-outlined mt-1 text-2xl ${
                      alert.type === "critical"
                        ? "text-critical"
                        : alert.type === "warning"
                        ? "text-warning"
                        : alert.type === "info"
                        ? "text-info"
                        : "text-success"
                    }`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {alert.type === "critical"
                      ? "error"
                      : alert.type === "warning"
                      ? "warning"
                      : alert.type === "info"
                      ? "info"
                      : "check_circle"}
                  </span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-black dark:text-white">
                          {alert.title}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          {alert.description}
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                          {alert.timestamp} | Source: {alert.source}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                          alert.status === "New"
                            ? "bg-critical/20 text-critical dark:bg-critical/30 dark:text-white"
                            : alert.status === "In Progress"
                            ? "bg-warning/20 text-warning dark:bg-warning/30 dark:text-white"
                            : alert.status === "Read"
                            ? "bg-info/20 text-info dark:bg-info/30 dark:text-white"
                            : "bg-success/20 text-success dark:bg-success/30 dark:text-white"
                        }`}
                      >
                        {alert.status}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      {alert.status === "Resolved" ? (
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Resolved by {alert.resolvedBy} at {alert.resolvedAt}.
                        </p>
                      ) : (
                        alert.actions?.map((action) => (
                          <button
                            key={action}
                            onClick={() => handleAction(alert.id, action)}
                            className={`flex text-sm font-medium items-center justify-center rounded-md h-8 px-3 ${
                              action === "Resolve"
                                ? "bg-primary text-white"
                                : "bg-slate-100 dark:bg-slate-600/50 text-black dark:text-white"
                            }`}
                          >
                            {action}
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </main>
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-20 right-6 w-full max-w-sm rounded-xl bg-white dark:bg-[#242f47] shadow-lg border border-slate-200 dark:border-transparent">
          <div className="flex items-start gap-3 p-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-critical/10 text-critical">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                error
              </span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-black dark:text-white">
                New Critical Alert
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Machine CNC-05A: Emergency Stop Activated
              </p>
            </div>
            <button
              onClick={closeToast}
              className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertManagement;
