import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const InterventionList: React.FC = () => {
  return (
    <div
      className="relative flex min-h-screen w-full"
      style={{ backgroundColor: "#1a2431" }}
    >
      <Sidebar />
      <main className="flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-8 text-white/90">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-4xl font-black tracking-[-0.033em]">
                Interventions
              </h1>
              <div className="flex items-center gap-2">
                <div className="inline-flex rounded-lg bg-[#242f47] p-1">
                  <button className="flex items-center justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined mr-2 text-base">
                      timeline
                    </span>
                    Timeline
                  </button>
                  <button className="flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white">
                    <span className="material-symbols-outlined mr-2 text-base">
                      calendar_month
                    </span>
                    Calendar
                  </button>
                </div>
                <button className="flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-primary/80">
                  <span className="material-symbols-outlined">add_circle</span>
                  Schedule Intervention
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-xl bg-[#242f47]/50 p-3">
              <select className="h-9 w-40 rounded-lg border-none bg-[#242f47] text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Technicians</option>
                <option>Jean Dupont</option>
                <option>Marie Curie</option>
                <option>Alain Turing</option>
              </select>
              <select className="h-9 w-40 rounded-lg border-none bg-[#242f47] text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Statuses</option>
                <option>Scheduled</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
              <select className="h-9 w-40 rounded-lg border-none bg-[#242f47] text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Types</option>
                <option>Preventive</option>
                <option>Corrective</option>
              </select>
            </div>
            <div className="grid grid-cols-[8rem_1fr] gap-x-8">
              <div className="col-start-1 row-start-1">
                <div className="sticky top-0 bg-[#1a2431] py-2">
                  <p className="text-lg font-bold">Monday, Nov 18</p>
                  <p className="text-sm text-white/50">3 interventions</p>
                </div>
              </div>
              <div className="col-start-2 row-start-1 flex flex-col gap-4 border-l border-dashed border-white/20 pl-8">
                <div className="relative rounded-xl border border-white/10 bg-[#242f47]/50 p-4 transition-all hover:border-primary/50 hover:bg-[#242f47]">
                  <div className="absolute -left-[2.3rem] top-4 flex size-6 items-center justify-center rounded-full bg-primary ring-4 ring-[#111621]">
                    <span className="material-symbols-outlined text-sm text-white">
                      build
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-bold text-white">
                        Hydraulic Press P-04
                      </h3>
                      <p className="text-sm text-white/70">
                        Check hydraulic circuit - #INT-0123
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <div
                          className="h-8 w-8 rounded-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1HsrYEyAFPih7FgPEljOW8wPEYI7L7OhnPGbeF3FJfdH8feG6Fi2NHS7gu89YRc1iOwQkdakD_npGx4m3rpI85S7Hq210CjhJHolEa7dNNz-9QjE1HP5zKELC_KT-oz4hAb_1Cq4Q76jlbDjQwa1MyvwrgTH7i4yPqu9OWxzM9o3VmD2WB435SBH9F8fiubyBP1ITM22n3ft_MP-b2HIyEbGbF5_x5Myaum80yKsraddjIS7z-L70Bm2dsF-mN7Q6knOU7DyVQJ8s")`,
                          }}
                        ></div>
                        <p className="text-sm text-white/80">Jean Dupont</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-orange-500/20 px-2 py-0.5 text-xs font-semibold text-orange-400">
                          In Progress
                        </span>
                        <span className="rounded-md bg-red-500/20 px-2 py-0.5 text-xs font-semibold text-red-400">
                          Corrective
                        </span>
                      </div>
                      <p className="text-sm font-medium text-white">
                        08:00 AM - 10:00 AM
                      </p>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <span>
                          <span className="font-semibold">Est:</span> 2h
                        </span>
                        <span>/</span>
                        <span>
                          <span className="font-semibold">Real:</span> -
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-xl border border-white/10 bg-[#242f47]/50 p-4 transition-all hover:border-primary/50 hover:bg-[#242f47]">
                  <div className="absolute -left-[2.3rem] top-4 flex size-6 items-center justify-center rounded-full bg-primary ring-4 ring-[#111621]">
                    <span className="material-symbols-outlined text-sm text-white">
                      build
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-bold text-white">
                        Welding Robot R-12
                      </h3>
                      <p className="text-sm text-white/70">
                        Monthly preventive maintenance - #INT-0124
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <div
                          className="h-8 w-8 rounded-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBy0Iiajdgoi6g3fD6SlhJt5c-cgBEL3hdy_tn6jERXrdFuu7ZcmTs42sO9PAJvx85_G6lIxZa3kjQjAyx0Ul336n2XG6g5jlEyo8hgvWhPEt2fdT_BmzuH5ATH4O09FJIqZlSrCqym8KhVl-59TANwomybgKudifUVAkXnENqxH2EJpbR642YfJxg3BXXrh7yj7B_JWFPC1p0Xb2KPbOkYFOnCJHWDi1J3EhRng0Ue34dAjqncHdW4JPtLuBo43sHbFrwFLhnEHs09")`,
                          }}
                        ></div>
                        <p className="text-sm text-white/80">Marie Curie</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-blue-500/20 px-2 py-0.5 text-xs font-semibold text-blue-400">
                          Scheduled
                        </span>
                        <span className="rounded-md bg-teal-500/20 px-2 py-0.5 text-xs font-semibold text-teal-400">
                          Preventive
                        </span>
                      </div>
                      <p className="text-sm font-medium text-white">
                        10:30 AM - 12:00 PM
                      </p>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <span>
                          <span className="font-semibold">Est:</span> 1.5h
                        </span>
                        <span>/</span>
                        <span>
                          <span className="font-semibold">Real:</span> -
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-xl border border-white/10 bg-[#242f47]/50 p-4 transition-all hover:border-primary/50 hover:bg-[#242f47]">
                  <div className="absolute -left-[2.3rem] top-4 flex size-6 items-center justify-center rounded-full bg-primary ring-4 ring-[#111621]">
                    <span className="material-symbols-outlined text-sm text-white">
                      build
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-bold text-white">
                        Conveyor C-07
                      </h3>
                      <p className="text-sm text-white/70">
                        Bearing lubrication - #INT-0120
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <div
                          className="h-8 w-8 rounded-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuABLwjLgANJ6J_LgEkPVvugh1-NL2c4-w4nmD35oD7P5DD-iYW8UowYRdVkZhjrFt9PEKOZfB7bWzjCJ9nzE0tB4PDH9aOMoBRAg5NhGy2JzNl5mjupvyeGNXSYvT8XOfRi4G_pWWfH43LnkClusy0vYNLYKV124OAP6LcALG7XkeBZGyyGnagcoD9sGS4AVs-XWqf0wCdvfFfQ_9sf-Fq1RoM6UtjuGVz9YP3e8yEaIgELNQjrcTHgTLcnKdJM_70miUZ31G66MnxG")`,
                          }}
                        ></div>
                        <p className="text-sm text-white/80">Jean Dupont</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-400">
                          Completed
                        </span>
                        <span className="rounded-md bg-teal-500/20 px-2 py-0.5 text-xs font-semibold text-teal-400">
                          Preventive
                        </span>
                      </div>
                      <p className="text-sm font-medium text-white">
                        02:00 PM - 03:00 PM
                      </p>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <span>
                          <span className="font-semibold">Est:</span> 1h
                        </span>
                        <span>/</span>
                        <span>
                          <span className="font-semibold">Real:</span> 55min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 row-start-2 mt-4">
                <div className="sticky top-0 bg-[#1a2431] py-2">
                  <p className="text-lg font-bold">Tuesday, Nov 19</p>
                  <p className="text-sm text-white/50">3 interventions</p>
                </div>
              </div>
              <div className="col-start-2 row-start-2 mt-4 flex flex-col gap-4 border-l border-dashed border-white/20 pl-8">
                <div className="relative rounded-xl border border-white/10 bg-[#242f47]/50 p-4 transition-all hover:border-primary/50 hover:bg-[#242f47]">
                  <div className="absolute -left-[2.3rem] top-4 flex size-6 items-center justify-center rounded-full bg-primary ring-4 ring-[#111621]">
                    <span className="material-symbols-outlined text-sm text-white">
                      build
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-bold text-white">
                        Machining Center CU-01
                      </h3>
                      <p className="text-sm text-white/70">
                        Replace pressure sensor - #INT-0125
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <div
                          className="h-8 w-8 rounded-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnQ7VggTsnolCgulD4szc7DV7TFc7AyD6rJ4y6PWAdVEsGZ3jP_0J14ZDwj0bMBrWdHXMcHyYFwQsfMICnQTJvEUNTSjw2_vkxZm06A9TdtL70i5dCRfLXjx6MZrea1PTwxdpRQL4dNNIX_5dQhltbZuy2aDKcEYSwkaGFdZr_iY3fxqGUhUaz0ewe1JxJ8eibH21sWaRHAxdU3PbWVYmJY8G-SZQaRRbQPZbokxrEiYrhvMLW57q48XPUcK_CXNSRDXc8l6IhJfir")`,
                          }}
                        ></div>
                        <p className="text-sm text-white/80">Alain Turing</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-blue-500/20 px-2 py-0.5 text-xs font-semibold text-blue-400">
                          Scheduled
                        </span>
                        <span className="rounded-md bg-red-500/20 px-2 py-0.5 text-xs font-semibold text-red-400">
                          Corrective
                        </span>
                      </div>
                      <p className="text-sm font-medium text-white">
                        09:00 AM - 01:00 PM
                      </p>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <span>
                          <span className="font-semibold">Est:</span> 4h
                        </span>
                        <span>/</span>
                        <span>
                          <span className="font-semibold">Real:</span> -
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default InterventionList;
