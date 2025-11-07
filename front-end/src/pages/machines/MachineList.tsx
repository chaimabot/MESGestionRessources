import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const MachineList: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {/* Page Heading */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
                Machines Management
              </p>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary/90">
                <span className="material-symbols-outlined text-base">add</span>
                Add Machine
              </button>
            </div>
            {/* Filters and Search Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-slate-800/50 px-4 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">
                    Status
                  </p>
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-xl">
                    expand_more
                  </span>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-slate-800/50 px-4 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">
                    Type
                  </p>
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-xl">
                    expand_more
                  </span>
                </button>
              </div>
              <div className="flex-1 min-w-[280px]">
                <label className="flex flex-col h-10 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus-within:ring-2 focus-within:ring-primary">
                    <div className="text-slate-500 dark:text-slate-400 flex bg-white dark:bg-slate-800/50 items-center justify-center pl-3 rounded-l-lg">
                      <span className="material-symbols-outlined text-xl">
                        search
                      </span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-slate-800/50 h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 text-sm"
                      placeholder="Search by name or reference..."
                      value=""
                    />
                  </div>
                </label>
              </div>
            </div>
            {/* Machine Cards Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Card 1: Active */}
              <div className="flex flex-col rounded-xl bg-white dark:bg-slate-800/50 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm transition-all hover:shadow-md hover:ring-slate-300 dark:hover:ring-slate-700">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-14 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900/50">
                      <img
                        className="h-full w-full object-cover rounded-lg"
                        data-alt="A modern CNC machine in a factory setting."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZpXC7foD2YEu2Mjz9UC7_H7qP4E1uTWlxD1RTkhSbqK4dz7C2XExKpknHrllNpyPbLURtDDjE7mh2TNr0dedFEw4ogcVx8f1pj9T5pdIHlOXKfJbG-SrlGOvd-j1oi7iHrBY-tlOLdhuwXlaxZSpGCz234KRbTXBH_wOgtvvJKwkb6y2oH2-6Iq67fI1Go9Q2AmKNKvJ4mbLiSZhSENOkPUVl7gGqVuZkk70H198hQvTbA2-iIUOIrnwVd6EeNmPnxcu1yC_FBLvJ"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        CNC Milling Machine
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        REF-0012A
                      </p>
                    </div>
                    <div className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-500/20 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:text-green-300">
                      Active
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 rounded-lg bg-slate-50 dark:bg-slate-900/40 p-3">
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Temperature
                      </p>
                      <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
                        75°C
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Speed
                      </p>
                      <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
                        1200 RPM
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Production
                      </p>
                      <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
                        85 u/hr
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800 px-5 py-3">
                  <button className="rounded-lg h-9 px-3 text-sm font-semibold text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                    Details
                  </button>
                  <button className="rounded-lg h-9 px-3 text-sm font-semibold text-red-600 dark:text-red-400 bg-red-500/10 hover:bg-red-500/20">
                    Report Breakdown
                  </button>
                </div>
              </div>
              {/* Card 2: Breakdown */}
              <div className="flex flex-col rounded-xl bg-white dark:bg-slate-800/50 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm transition-all hover:shadow-md hover:ring-slate-300 dark:hover:ring-slate-700">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-14 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900/50">
                      <img
                        className="h-full w-full object-cover rounded-lg"
                        data-alt="A robotic welding arm in operation."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMQePFyKOIfdUglZD2ofruf1lgaZ7_KkM6ms6-i-LDz_ZOcQYgaC9Ml8OwOL7uyOjt7Rf1ydRKkSNTwtYrRsXB_jXCMK5vD36Yj-g_75nv4kGEQTiTEao4HXzRXejIk-eNEySlifmFSLiYd01djOULjaKDwWixAMddjehmwaRovu41oX7elPKGRmbpLdtV0edZVa4_aCGgZEy5mUGzZ8K8khg5fFpBcKzUnysXB5qPofJR0Ig6tAa_-vOT2ExBtksQKXLjrC-qXNF5"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Robotic Welder
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        REF-0024B
                      </p>
                    </div>
                    <div className="inline-flex items-center rounded-full bg-red-100 dark:bg-red-500/20 px-2.5 py-0.5 text-xs font-semibold text-red-800 dark:text-red-300">
                      Breakdown
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 rounded-lg bg-slate-50 dark:bg-slate-900/40 p-3">
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Temperature
                      </p>
                      <p className="mt-1 font-semibold text-red-600 dark:text-red-400">
                        150°C
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Speed
                      </p>
                      <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
                        0 RPM
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Production
                      </p>
                      <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
                        0 u/hr
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800 px-5 py-3">
                  <button className="rounded-lg h-9 px-3 text-sm font-semibold text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                    Details
                  </button>
                  <button className="rounded-lg h-9 px-3 text-sm font-semibold text-red-600 dark:text-red-400 bg-red-500/10 hover:bg-red-500/20">
                    Report Breakdown
                  </button>
                </div>
              </div>
              {/* Card 3: Maintenance */}
              <div className="flex flex-col rounded-xl bg-white dark:bg-slate-800/50 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm transition-all hover:shadow-md hover:ring-slate-300 dark:hover:ring-slate-700">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-14 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900/50">
                      <img
                        className="h-full w-full object-cover rounded-lg"
                        data-alt="A large industrial hydraulic press machine."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdGbgT9xydDWPHStLZmeQgqqmWBCzqs07ieARKa8P99XYnBJmaxSV9h1DHq2r1SFMtNe8Vv4SZP4MtJ5e3l6WDrYMxGkat3AksWO652eiPcVErL6WgVEIO2fnk5cRSZPgP-8LFpiISNcyBYSbR5iCuS0ewZbtMePaW9wwXJegJdux5LUQKgq9xbsAXApiv78DKWKtigQO-0LhRMza2VzmxBfgy0nQuIfrrc4wUUljm_SZrLtGbRoLFoHAewUsp0mkDjJq4bFnnGzWA"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Hydraulic Press
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        REF-0007C
                      </p>
                    </div>
                    <div className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-500/20 px-2.5 py-0.5 text-xs font-semibold text-orange-800 dark:text-orange-300">
                      Maintenance
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 rounded-lg bg-slate-50 dark:bg-slate-900/40 p-3">
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Temperature
                      </p>
                      <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
                        30°C
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Speed
                      </p>
                      <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
                        0 RPM
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Production
                      </p>
                      <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
                        0 u/hr
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800 px-5 py-3">
                  <button className="rounded-lg h-9 px-3 text-sm font-semibold text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                    Details
                  </button>
                  <button className="rounded-lg h-9 px-3 text-sm font-semibold text-red-600 dark:text-red-400 bg-red-500/10 hover:bg-red-500/20">
                    Report Breakdown
                  </button>
                </div>
              </div>
              {/* More cards can be added here */}
            </div>
            {/* Pagination */}
            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Displaying{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  1
                </span>{" "}
                to{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  3
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  27
                </span>{" "}
                results
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-inset ring-slate-300 dark:ring-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50"
                  disabled
                >
                  <span className="material-symbols-outlined text-xl">
                    chevron_left
                  </span>
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-white">
                  1
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-inset ring-slate-300 dark:ring-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                  2
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-inset ring-slate-300 dark:ring-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                  3
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-inset ring-slate-300 dark:ring-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined text-xl">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default MachineList;
