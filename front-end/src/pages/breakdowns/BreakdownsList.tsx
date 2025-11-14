import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

interface Machine {
  _id: string;
  name: string;
  reference: string;
  status: string;
  temperature: number;
  speed: number;
  production: number;
  imageUrl: string;
}

interface User {
  _id: string;
  name: string;
  role: string;
}

interface Breakdown {
  _id: string;
  machineId: Machine;
  description: string;
  reportedBy: User;
  assignedTo?: User;
  status: string;
  createdAt: string;
  __v: number;
}

const BreakdownsList: React.FC = () => {
  const [breakdowns, setBreakdowns] = useState<Breakdown[]>([]);
  const [technicians, setTechnicians] = useState<User[]>([]);
  const [selectedBreakdown, setSelectedBreakdown] = useState<Breakdown | null>(
    null
  );
  const [selectedTechnicianId, setSelectedTechnicianId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Charger les pannes
  useEffect(() => {
    const fetchBreakdowns = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token");
        if (!token) throw new Error("Veuillez vous connecter.");

        const res = await fetch("http://localhost:5000/api/breakdowns", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error(`Erreur ${res.status}`);

        const data: Breakdown[] = await res.json();
        setBreakdowns(data);
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

    fetchBreakdowns();
  }, []);

  // Charger la liste des techniciens (une seule fois)
  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          "http://localhost:5000/api/breakdowns/technicians",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        setTechnicians(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTechnicians();
  }, []);

  // Fonction assignation
  const handleAssignTechnician = async () => {
    if (!selectedBreakdown || !selectedTechnicianId) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:5000/api/breakdowns/${selectedBreakdown._id}/assign`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ technicianId: selectedTechnicianId }),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Erreur lors de l’assignation.");
      }

      const updated = await res.json();

      // Mettre à jour localement la panne
      setBreakdowns((prev) =>
        prev.map((b) => (b._id === updated._id ? updated : b))
      );

      setModalOpen(false);
      setSelectedTechnicianId("");
      setSelectedBreakdown(null);
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erreur inconnue");
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-orange-500/20 text-orange-400 border border-orange-500/50";
      case "Pending":
        return "bg-red-500/20 text-red-400 border border-red-500/50";
      case "Resolved":
        return "bg-green-500/20 text-green-400 border border-green-500/50";
      default:
        return "bg-gray-500/20 text-gray-400 border border-gray-500/50";
    }
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString("fr-TN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="relative flex min-h-screen w-full bg-background-dark">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">Liste des Pannes</h2>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-12 text-gray-400">
              Chargement...
            </div>
          )}

          {error && (
            <div className="bg-red-900/30 text-red-300 border border-red-500/50 p-4 rounded-lg">
              {error}
            </div>
          )}

          {!loading && !error && breakdowns.length > 0 && (
            <div className="bg-gray-800/50 rounded-xl overflow-hidden">
              <table className="w-full text-sm text-left text-gray-300">
                <thead className="bg-gray-700/70 text-gray-400">
                  <tr>
                    <th className="px-6 py-3">Machine</th>
                    <th className="px-6 py-3">Description</th>
                    <th className="px-6 py-3">Signalé par</th>
                    <th className="px-6 py-3">Statut</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {breakdowns.map((b) => (
                    <tr key={b._id} className="hover:bg-gray-700/40">
                      <td className="px-6 py-4 text-white">
                        {b.machineId.name}
                      </td>
                      <td className="px-6 py-4">{b.description}</td>
                      <td
                        className="px-6 py-4 cursor-pointer text-blue-400 hover:underline"
                        onClick={() => {
                          setSelectedBreakdown(b);
                          setModalOpen(true);
                        }}
                      >
                        {b.reportedBy.name}
                        <span className="block text-xs text-gray-500">
                          ({b.reportedBy.role})
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            b.status
                          )}`}
                        >
                          {b.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-400">
                        {formatDate(b.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal assignation */}
        {modalOpen && selectedBreakdown && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="bg-gray-800 rounded-xl p-6 w-96 text-gray-200">
              <h3 className="text-xl font-semibold mb-4">
                Assigner un technicien
              </h3>

              <p className="text-sm mb-3">
                <strong>Panne :</strong> {selectedBreakdown.description}
              </p>

              {selectedBreakdown.assignedTo ? (
                <p className="text-sm mb-3 text-green-400">
                  Technicien actuel :{" "}
                  <strong>{selectedBreakdown.assignedTo.name}</strong>
                </p>
              ) : (
                <p className="text-sm mb-3 text-yellow-400">
                  Aucun technicien assigné.
                </p>
              )}

              <label className="block text-sm mb-2">
                Sélectionner un technicien :
              </label>
              <select
                className="w-full bg-gray-700 p-2 rounded mb-4"
                value={selectedTechnicianId}
                onChange={(e) => setSelectedTechnicianId(e.target.value)}
              >
                <option value="">-- Choisir --</option>
                {technicians.map((tech) => (
                  <option key={tech._id} value={tech._id}>
                    {tech.name}
                  </option>
                ))}
              </select>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAssignTechnician}
                  disabled={!selectedTechnicianId}
                  className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 disabled:opacity-50"
                >
                  Assigner
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BreakdownsList;
