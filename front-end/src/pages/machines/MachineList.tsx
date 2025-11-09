import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

interface Machine {
  _id?: string;
  id?: number;
  name: string;
  reference: string;
  status: "Active" | "Breakdown" | "Maintenance";
  temperature: number;
  speed: number;
  production: number;
  image?: string;
}

const MachineList: React.FC = () => {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/machines");

        if (response.data.data && Array.isArray(response.data.data)) {
          setMachines(response.data.data);
        } else if (Array.isArray(response.data)) {
          setMachines(response.data);
        } else {
          console.error("Format de données invalide:", response.data);
          setMachines([]);
          setError("Format de données invalide");
        }

        setError(null);
      } catch (err: unknown) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.error || "Erreur inconnue");
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erreur inconnue. Veuillez réessayer.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMachines();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300";
      case "Breakdown":
        return "bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-300";
      case "Maintenance":
        return "bg-orange-100 dark:bg-orange-500/20 text-orange-800 dark:text-orange-300";
      default:
        return "bg-slate-100 dark:bg-slate-500/20 text-slate-800 dark:text-slate-300";
    }
  };

  // Filtrer les machines par recherche
  const filteredMachines = machines.filter(
    (machine) =>
      machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      machine.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <button
                onClick={() => navigate("/machines/add")}
                className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
              >
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
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="mt-8 flex justify-center items-center">
                <p className="text-slate-600 dark:text-slate-400">
                  Chargement des machines...
                </p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="mt-8 rounded-lg bg-red-50 dark:bg-red-500/10 p-4">
                <p className="text-red-800 dark:text-red-400">{error}</p>
              </div>
            )}

            {/* Machine Cards Grid */}
            {!loading && !error && (
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredMachines.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-slate-600 dark:text-slate-400">
                      Aucune machine trouvée
                    </p>
                  </div>
                ) : (
                  filteredMachines.map((machine) => (
                    <div
                      key={machine._id || machine.id}
                      className="flex flex-col rounded-xl bg-white dark:bg-slate-800/50 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm transition-all hover:shadow-md hover:ring-slate-300 dark:hover:ring-slate-700"
                    >
                      <div className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex size-14 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900/50">
                            <img
                              className="h-full w-full object-cover rounded-lg"
                              src={
                                machine.image ||
                                "https://via.placeholder.com/150"
                              }
                              alt={machine.name}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                              {machine.name}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {machine.reference}
                            </p>
                          </div>
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getStatusColor(
                              machine.status
                            )}`}
                          >
                            {machine.status}
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-4 rounded-lg bg-slate-50 dark:bg-slate-900/40 p-3">
                          <div className="text-center">
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Temperature
                            </p>
                            <p
                              className={`mt-1 font-semibold ${
                                machine.status === "Breakdown"
                                  ? "text-red-600 dark:text-red-400"
                                  : "text-slate-800 dark:text-slate-200"
                              }`}
                            >
                              {machine.temperature}°C
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Speed
                            </p>
                            <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
                              {machine.speed} RPM
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Production
                            </p>
                            <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
                              {machine.production} u/hr
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
                  ))
                )}
              </div>
            )}

            {/* Pagination */}
            {!loading && !error && filteredMachines.length > 0 && (
              <div className="mt-8 flex items-center justify-between">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Displaying{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    1
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {filteredMachines.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {machines.length}
                  </span>{" "}
                  results
                </p>
              </div>
            )}
          </div>
        </main>
      </main>
    </div>
  );
};

export default MachineList;
