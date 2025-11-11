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

  // États pour le modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [newStatus, setNewStatus] = useState<
    "Active" | "Breakdown" | "Maintenance"
  >("Active");
  const [updating, setUpdating] = useState(false);

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

  // Modal functions
  const openModal = (machine: Machine) => {
    setSelectedMachine(machine);
    setNewStatus(machine.status);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMachine(null);
    setNewStatus("Active");
  };

  // Update status API
  const updateStatus = async () => {
    if (!selectedMachine) return;
    try {
      setUpdating(true);
      const response = await fetch(
        `http://localhost:5000/api/machines/${selectedMachine._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      if (!response.ok) throw new Error("Erreur lors de la mise à jour");
      const updatedMachine = await response.json();

      // Mise à jour locale
      setMachines((prev) =>
        prev.map((m) =>
          m._id === selectedMachine._id ? updatedMachine.data : m
        )
      );
      closeModal();
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Impossible de mettre à jour le statut");
      }
    } finally {
      setUpdating(false);
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
            <button className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700">
              + Add Machine
            </button>
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
                    <div className="flex justify-end gap-3 border-t border-slate-200 dark:border-slate-800 px-5 py-3">
                      <button
                        onClick={() => openModal(machine)}
                        className="rounded-lg h-9 px-3 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20"
                      >
                        Update Status
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedMachine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Update Machine Status
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {selectedMachine.name} - {selectedMachine.reference}
              </p>
            </div>

            <div className="px-6 py-5 space-y-3">
              {["Active", "Maintenance", "Breakdown"].map((status) => (
                <label
                  key={status}
                  className={`flex items-center p-4 rounded-lg border-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/30 ${
                    newStatus === status
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="status"
                    value={status}
                    checked={newStatus === status}
                    onChange={(e) => setNewStatus(e.target.value  as "Active" | "Breakdown" | "Maintenance"
)}
                    className="h-4 w-4"
                  />
                  <span className="ml-3 text-sm font-semibold text-slate-900 dark:text-white">
                    {status}
                  </span>
                </label>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={updateStatus}
                disabled={updating || newStatus === selectedMachine.status}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                {updating ? "Updating..." : "Update Status"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MachineList;
