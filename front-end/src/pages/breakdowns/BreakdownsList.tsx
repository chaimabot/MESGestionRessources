import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const BreakdownsList: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = (index: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedRows(newExpanded);
  };

  const breakdowns = [
    {
      id: 1,
      machine: "CNC-04B",
      startTime: "2023-10-27 08:15 AM",
      description: "Spindle motor overheating issue reported.",
      status: "In Progress",
      technician: "John Doe",
      details: {
        log: [
          "10/27 08:15 AM: Issue reported by operator.",
          "10/27 08:30 AM: John Doe assigned.",
          "10/27 09:05 AM: Initial diagnosis complete. Cooling fan failure.",
        ],
        notes:
          "The primary cooling fan for the spindle motor has seized. Ordering a replacement part. Machine is temporarily offline.",
        parts: "None yet. Awaiting part: CF-SPDL-120",
      },
    },
    {
      id: 2,
      machine: "LATHE-02A",
      startTime: "2023-10-27 11:45 AM",
      description: "E-stop button is not disengaging correctly.",
      status: "Pending",
      technician: "Unassigned",
      details: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-orange-500/20 text-orange-400";
      case "Pending":
        return "bg-red-500/20 text-red-400";
      case "Resolved":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <div className="flex-1 overflow-y-auto bg-background-dark p-6">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">
              Machine Breakdowns
            </h1>
            <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-semibold bg-primary text-white rounded-lg hover:bg-primary/90">
              <span className="material-symbols-outlined text-base">add</span>
              Report New Breakdown
            </button>
          </div>

          {/* Filters */}
          <div className="bg-[#1C2836] rounded-xl p-4 mb-6 border border-gray-200/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="date-range"
                  className="text-sm font-medium text-gray-400 mb-2"
                >
                  Date Range
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="material-symbols-outlined text-gray-400 text-xl">
                      calendar_month
                    </span>
                  </div>
                  <input
                    id="date-range"
                    type="text"
                    placeholder="Select date range"
                    className="form-input block w-full rounded-lg border-0 bg-[#283039] py-2.5 pl-10 pr-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="status-filter"
                  className="text-sm font-medium text-gray-400 mb-2"
                >
                  Status
                </label>
                <select
                  id="status-filter"
                  className="form-select block w-full rounded-lg border-0 bg-[#283039] py-2.5 pl-3 pr-10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                >
                  <option>All</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </div>

              <div className="flex flex-col md:col-span-2 lg:col-span-2">
                <label
                  htmlFor="search-breakdown"
                  className="text-sm font-medium text-gray-400 mb-2"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="material-symbols-outlined text-gray-400 text-xl">
                      search
                    </span>
                  </div>
                  <input
                    id="search-breakdown"
                    type="search"
                    placeholder="Search by machine, technician..."
                    className="form-input block w-full rounded-lg border-0 bg-[#283039] py-2.5 pl-10 pr-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden bg-[#1C2836] rounded-xl border border-gray-200/10">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs text-gray-400 uppercase bg-[#283039]">
                  <tr>
                    <th scope="col" className="p-4 w-12"></th>
                    <th scope="col" className="px-6 py-3">
                      Machine
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Start Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Technician
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {breakdowns.map((breakdown, index) => (
                    <React.Fragment key={breakdown.id}>
                      <tr className="bg-[#1C2836] border-b border-gray-700/50 hover:bg-gray-500/10">
                        <td className="p-4">
                          <button
                            onClick={() => toggleRow(index)}
                            className="text-gray-400 hover:text-white"
                          >
                            <span className="material-symbols-outlined">
                              {expandedRows.has(index)
                                ? "expand_less"
                                : "expand_more"}
                            </span>
                          </button>
                        </td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-white whitespace-nowrap"
                        >
                          {breakdown.machine}
                        </th>
                        <td className="px-6 py-4">{breakdown.startTime}</td>
                        <td className="px-6 py-4 max-w-xs truncate">
                          {breakdown.description}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                              breakdown.status
                            )}`}
                          >
                            {breakdown.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">{breakdown.technician}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-gray-400 hover:text-white">
                            <span className="material-symbols-outlined">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>

                      {expandedRows.has(index) && breakdown.details && (
                        <tr className="bg-[#17212b]">
                          <td colSpan={7} className="p-0">
                            <div className="p-6">
                              <h4 className="font-bold text-lg mb-4 text-gray-200">
                                Breakdown Details: {breakdown.machine}
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                  <h5 className="font-semibold mb-2 text-gray-300">
                                    Breakdown Log
                                  </h5>
                                  <ul className="space-y-2 text-sm text-gray-400">
                                    {breakdown.details.log.map(
                                      (log, logIndex) => (
                                        <li key={logIndex}>{log}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold mb-2 text-gray-300">
                                    Technician Notes
                                  </h5>
                                  <p className="text-sm text-gray-400">
                                    {breakdown.details.notes}
                                  </p>
                                </div>
                                <div>
                                  <h5 className="font-semibold mb-2 text-gray-300">
                                    Parts Used
                                  </h5>
                                  <p className="text-sm text-gray-400">
                                    {breakdown.details.parts}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <nav
              aria-label="Table navigation"
              className="flex items-center justify-between p-4 border-t border-gray-700/50"
            >
              <span className="text-sm font-normal text-gray-400">
                Showing <span className="font-semibold text-white">1-4</span> of
                <span className="font-semibold text-white">100</span>
              </span>
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-400 bg-[#283039] border border-gray-700 rounded-l-lg hover:bg-gray-700 hover:text-white"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-400 bg-[#283039] border border-gray-700 hover:bg-gray-700 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 text-primary border border-primary bg-primary/20 hover:bg-primary/30"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-400 bg-[#283039] border border-gray-700 rounded-r-lg hover:bg-gray-700 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BreakdownsList;
