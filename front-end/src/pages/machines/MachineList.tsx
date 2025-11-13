import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

interface Machine {
  _id: string;
  name: string;
  reference: string;
  status: "Active" | "Breakdown" | "Maintenance";
  temperature: number;
  speed: number;
  production: number;
  imageUrl?: string;
}

const MachineList: React.FC = () => {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");



  // Récupérer toutes les machines depuis le backend
  const fetchMachines = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/machines");
      if (!response.ok)
        throw new Error("Erreur lors du chargement des machines");
      const data = await response.json();
      setMachines(data.data); // assuming response structure { status, message, data }
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erreur inconnue");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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



  const filteredMachines = machines.filter(
    (machine) =>
      machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      machine.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative flex min-h-screen w-full bg-slate-50 dark:bg-slate-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1">
        {/* Header */}
        <Header />

        <div className="p-6 lg:p-8 mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
              Machines Management
            </p>
            
          </div>

          {/* Search Bar */}
          <div className="mt-6 flex-1 min-w-[280px]">
            <input
              type="text"
              placeholder="Search by name or reference..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border p-2"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="mt-8 rounded-lg bg-red-50 dark:bg-red-500/10 p-4">
              <p className="text-red-800 dark:text-red-400">{error}</p>
            </div>
          )}

          {/* Machine Cards */}
          {loading ? (
            <p className="mt-8">Loading...</p>
          ) : (
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
                    key={machine._id}
                    className="flex flex-col rounded-xl bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900/50">
                          <img
                            src={
                              machine.imageUrl ||
                              "https://via.placeholder.com/150"
                            }
                            alt={machine.name}
                            className="w-full h-full object-cover"
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
                    </div>
                    
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>

     
    </div>
  );
};

export default MachineList;
