import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const OperatorsManagement: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <div className="mx-auto max-w-7xl">
          {/* Barre de recherche et filtres */}
          <div className="mb-4 space-y-4 rounded-xl bg-white p-4 dark:bg-[#111418]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex-1 min-w-[300px]">
                <label className="flex flex-col h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="flex items-center justify-center rounded-l-lg border border-r-0 border-gray-200 bg-gray-100 pl-4 text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-[#9dabb9]">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-l-0 border-gray-200 bg-gray-100 p-0 pl-2 text-base font-normal leading-normal text-gray-900 placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-primary focus:ring-inset dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-[#9dabb9]"
                      placeholder="Search by name or ID..."
                      value=""
                    />
                  </div>
                </label>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex gap-2">
                  <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-gray-100 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
                    <span>Filter by Status</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_drop_down
                    </span>
                  </button>
                  <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-gray-100 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
                    <span>Filter by Shift</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_drop_down
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tableau des opérateurs */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#111418]">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Operator Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Employee ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Assigned Machine/Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Shift Schedule
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-[#111418]">
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                      Jane Cooper
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      EMP-00123
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      CNC Machine 5
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">
                        <span className="size-1.5 rounded-full bg-green-500"></span>{" "}
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      1st Shift (6am-2pm)
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        <span className="material-symbols-outlined text-xl">
                          history
                        </span>
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                      Cody Fisher
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      EMP-00124
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      Assembly Line B
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
                        <span className="size-1.5 rounded-full bg-yellow-500"></span>{" "}
                        On Break
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      1st Shift (6am-2pm)
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        <span className="material-symbols-outlined text-xl">
                          history
                        </span>
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                      Esther Howard
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      EMP-00125
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      Welding Station 2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">
                        <span className="size-1.5 rounded-full bg-green-500"></span>{" "}
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      2nd Shift (2pm-10pm)
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        <span className="material-symbols-outlined text-xl">
                          history
                        </span>
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                      Jenny Wilson
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      EMP-00126
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      Quality Control
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900/50 dark:text-red-300">
                        <span className="size-1.5 rounded-full bg-red-500"></span>{" "}
                        Inactive
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      3rd Shift (10pm-6am)
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        <span className="material-symbols-outlined text-xl">
                          history
                        </span>
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                      Kristin Watson
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      EMP-00127
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      Packaging Line 1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">
                        <span className="size-1.5 rounded-full bg-green-500"></span>{" "}
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      2nd Shift (2pm-10pm)
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        <span className="material-symbols-outlined text-xl">
                          history
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 dark:border-gray-800 dark:bg-[#111418]">
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">5</span> of{" "}
                    <span className="font-medium">23</span> results
                  </p>
                </div>
                <div>
                  <nav
                    aria-label="Pagination"
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:ring-gray-700 dark:hover:bg-gray-800"
                    >
                      <span className="material-symbols-outlined text-xl">
                        chevron_left
                      </span>
                    </a>
                    <a
                      href="#"
                      className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 dark:text-gray-300 dark:ring-gray-700"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:ring-gray-700 dark:hover:bg-gray-800"
                    >
                      <span className="material-symbols-outlined text-xl">
                        chevron_right
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OperatorsManagement;
