import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const StockManagement: React.FC = () => {
  return (
    <div
      className="relative flex min-h-screen w-full"
      style={{ backgroundColor: "#1a2431" }}
    >
      <Sidebar />
      <main className="flex-1">
        <Header />
        <main className="flex-1 p-6 lg:p-10">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-3 items-center">
              <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                Stock Management
              </p>
            </div>
            {/* ActionPanel */}
            <div className="@container">
              <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-red-500/50 bg-red-500/10 p-5 @[480px]:flex-row @[480px]:items-center">
                <div className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-red-400 text-3xl">
                    warning
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-red-300 text-base font-bold leading-tight">
                      Alert: 3 items are below the minimum stock threshold.
                    </p>
                    <p className="text-red-400/80 text-base font-normal leading-normal">
                      Please restock to avoid stockouts.
                    </p>
                  </div>
                </div>
                <a
                  className="text-sm font-bold leading-normal tracking-[0.015em] flex gap-2 text-white items-center bg-red-500/20 hover:bg-red-500/40 px-4 py-2 rounded-lg transition-colors"
                  href="#"
                >
                  View items
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* ToolBar */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200/10 dark:border-white/10 p-4 bg-gray-50 dark:bg-black/20">
              <div className="flex-1 min-w-[250px] relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg">
                  search
                </span>
                <input
                  className="w-full h-10 pl-12 pr-4 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm"
                  placeholder="Search by name or reference..."
                  type="text"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <select className="h-10 px-4 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary">
                  <option>Category</option>
                  <option>Raw Materials</option>
                  <option>Consumables</option>
                  <option>Spare Parts</option>
                </select>
                <select className="h-10 px-4 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary">
                  <option>Location</option>
                  <option>Warehouse A</option>
                  <option>Zone B1</option>
                </select>
                <select className="h-10 px-4 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary">
                  <option>Status</option>
                  <option>In Stock</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary hover:bg-primary/90 text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4 transition-colors">
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  add
                </span>
                <span className="truncate">Add Item</span>
              </button>
            </div>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Article Card 1 (Low Stock) */}
              <div className="flex flex-col bg-white dark:bg-black/20 rounded-xl border border-gray-200/10 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <div
                  className="bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="Image of Stainless Steel A4 Screw"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3bVXRNWotrCmLs2g0HIO46FRJ3qdBYLNRhSwL_Biq332xiIEdr8qpXiqImbOmrUyk1KIUksVeNHLX7QXmumqEQXWmCUzmd8x5XyjX9m6tHnYVn_0J6qElLEwivAZAokX1srAnH75XWvXGzMIGm2H_SGE94f4GiUcahnjPLckp1OK5bKFtExSaqYTShxpmcwTHtfxV_oITI29n0l8jGKX5DTswdvAvg4KZZMxVa19jtIajJhVfGd8hcRlYJKPTni5Irc8JUPDa-JYV")`,
                  }}
                ></div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          Stainless Steel A4 Screw
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          REF: VIS-A4-M6-25
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-red-500/10 text-red-500 dark:text-red-400 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-base">
                          warning
                        </span>
                        <span className="text-xs font-semibold">Low Stock</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                      <p>
                        <span className="font-semibold">Quantity:</span> 25
                        Units
                      </p>
                      <p>
                        <span className="font-semibold">Location:</span> Aisle
                        C, Rack 12
                      </p>
                      <p>
                        <span className="font-semibold">Unit Price:</span> 0.15
                        €
                      </p>
                      <p>
                        <span className="font-semibold">Last Movement:</span>{" "}
                        Outbound, 07/25/2023
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-3 flex justify-end">
                    <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Article Card 2 (Sufficient Stock) */}
              <div className="flex flex-col bg-white dark:bg-black/20 rounded-xl border border-gray-200/10 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <div
                  className="bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="Image of industrial gears"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmsBWnH1qIpYKqBV6U2MzRrJQ3sMviKtEBsYvecAvUrYzPKXO6jfJDTM2wHscph7i8u03yoUT2hBVtp3EddZBHVX0UjqdZZqbplvHkYHm0QVKTuj92AgbJxw_YXPWdNDaJMN3sNkXYk1NZI4ZPp0LQLlUT232lWuEN_dcO1nTqyaFtyxNNJ6JG0YaePAY4RZxLXxBmKHRJZ9QHPNTnT0IQv6P4QlLyJqIv7KZznpz-Ba7wMAg0v3DasguYdSwO8HE-2HOeQj7_fiXd")`,
                  }}
                ></div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          Straight Gear M2
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          REF: ENG-M2-45T
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-base">
                          check_circle
                        </span>
                        <span className="text-xs font-semibold">In Stock</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                      <p>
                        <span className="font-semibold">Quantity:</span> 250
                        Units
                      </p>
                      <p>
                        <span className="font-semibold">Location:</span> Zone B,
                        Shelf 04
                      </p>
                      <p>
                        <span className="font-semibold">Unit Price:</span> 42.50
                        €
                      </p>
                      <p>
                        <span className="font-semibold">Last Movement:</span>{" "}
                        Inbound, 07/18/2023
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-3 flex justify-end">
                    <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Article Card 3 (Warning Stock) */}
              <div className="flex flex-col bg-white dark:bg-black/20 rounded-xl border border-gray-200/10 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <div
                  className="bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="Image of hydraulic oil container"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJVGNrS2bH4OL2--UBNQDEiUQ-fr9ORpde47MZQOPGV5LjFGLRd1wZwiegvb2fSJyIi-Ux6PKbH9AazeSxcuUsS-U4TGkDV-LR2h9-ptArEL0Wz68Ckn249hIppgET4VXTKMzOzgjKLtC3GDliQTVYkW-RJ_WG7uL_AmCIJ0qGN2PJYThyyk9z3bWuiwxduW1w1feCIniLGQpO86zlmHHBWKHFzVSQ943NIFB_c9TGD1iWczXJFW4cLVFQIfDdugf1YVaiGlR_Mh-g")`,
                  }}
                ></div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          Hydraulic Oil 5L
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          REF: HUILE-H46-5L
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-base">
                          hourglass_empty
                        </span>
                        <span className="text-xs font-semibold">
                          Threshold Near
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                      <p>
                        <span className="font-semibold">Quantity:</span> 12 Cans
                      </p>
                      <p>
                        <span className="font-semibold">Location:</span>{" "}
                        Chemical Storage
                      </p>
                      <p>
                        <span className="font-semibold">Unit Price:</span> 28.00
                        €
                      </p>
                      <p>
                        <span className="font-semibold">Last Movement:</span>{" "}
                        Outbound, 07/24/2023
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-3 flex justify-end">
                    <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Article Card 4 (Sufficient Stock) */}
              <div className="flex flex-col bg-white dark:bg-black/20 rounded-xl border border-gray-200/10 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <div
                  className="bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="Image of circuit boards"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvsfkDT8qHa-R9ImaUkFfjjCk6TQojVDEuxHIc1UdcQ_mez6v9drmXTDxoGkshkG51LpcV0oVqI7K2LaLOop6cZtsMcjb7USt7yUat0C6KXOEtJi6wTasBl1ekKLtie4TzYT8vyxL4VNeascGdJUc-Ssd50o5gAF9VP74QiUg5fgv2cISQ6B7DWVeW6kzUIFV8drs73gEkifG5ItP44hVsA8NH7dkafiSUjjN0b-A3Sl8ltE5cGq7HYojx4w5oamTHNoZ98-d9svDT")`,
                  }}
                ></div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          CPU-X Motherboard
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          REF: PCB-CPUX-V2.1
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-base">
                          check_circle
                        </span>
                        <span className="text-xs font-semibold">In Stock</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                      <p>
                        <span className="font-semibold">Quantity:</span> 88
                        Units
                      </p>
                      <p>
                        <span className="font-semibold">Location:</span> Clean
                        Room, Cabinet 3
                      </p>
                      <p>
                        <span className="font-semibold">Unit Price:</span>{" "}
                        195.00 €
                      </p>
                      <p>
                        <span className="font-semibold">Last Movement:</span>{" "}
                        Inbound, 07/15/2023
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-3 flex justify-end">
                    <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </button>
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

export default StockManagement;
