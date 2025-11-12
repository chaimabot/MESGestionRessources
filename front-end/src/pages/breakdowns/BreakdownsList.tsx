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
  status: string;
  createdAt: string;
  __v: number;
}

const BreakdownsList: React.FC = () => {
  const [breakdowns, setBreakdowns] = useState<Breakdown[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // États pour le modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedBreakdown, setSelectedBreakdown] = useState<Breakdown | null>(
    null
  );
  const [newStatus, setNewStatus] = useState<string>("");
  const [updating, setUpdating] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBreakdowns = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Veuillez vous connecter pour accéder aux données.");
        }

        const res = await fetch("http://localhost:5000/api/breakdowns", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.message || `Erreur ${res.status}`);
        }

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

  const openModal = (breakdown: Breakdown) => {
    setSelectedBreakdown(breakdown);
    setNewStatus(breakdown.status);
    setIsModalOpen(true);
    setUpdateError(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBreakdown(null);
    setNewStatus("");
    setUpdateError(null);
  };

  const handleUpdateStatus = async () => {
    if (!selectedBreakdown) return;

    try {
      setUpdating(true);
      setUpdateError(null);

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Veuillez vous connecter.");
      }

      const res = await fetch(
        `http://localhost:5000/api/breakdowns/${selectedBreakdown._id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Erreur ${res.status}`);
      }

      const updatedBreakdown: Breakdown = await res.json();

      // Mettre à jour la liste locale
      setBreakdowns((prev) =>
        prev.map((b) => (b._id === updatedBreakdown._id ? updatedBreakdown : b))
      );

      closeModal();
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setUpdateError(err.message);
      } else {
        setUpdateError("Erreur lors de la mise à jour");
      }
    } finally {
      setUpdating(false);
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

          {/* Chargement */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
              <span className="ml-3 text-gray-400">Chargement...</span>
            </div>
          )}

          {/* Erreur */}
          {error && !loading && (
            <div className="bg-red-900/30 border border-red-500/50 text-red-300 p-4 rounded-lg mb-6">
              <p className="font-medium">Erreur :</p>
              <p>{error}</p>
            </div>
          )}

          {/* Aucune panne */}
          {!loading && !error && breakdowns.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              Aucune panne signalée pour le moment.
            </div>
          )}

          {/* Tableau */}
          {!loading && breakdowns.length > 0 && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-300">
                  <thead className="text-xs uppercase bg-gray-700/70 text-gray-400">
                    <tr>
                      <th className="px-6 py-3">Machine</th>
                      <th className="px-6 py-3">Description</th>
                      <th className="px-6 py-3">Signalé par</th>
                      <th className="px-6 py-3">Statut</th>
                      <th className="px-6 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {breakdowns.map((breakdown) => (
                      <tr
                        key={breakdown._id}
                        className="bg-gray-800/30 hover:bg-gray-700/50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-white">
                          {breakdown.machineId.name}
                        </td>
                        <td className="px-6 py-4 max-w-xs">
                          <span
                            className="block truncate"
                            title={breakdown.description}
                          >
                            {breakdown.description}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {breakdown.reportedBy.name}
                          <span className="block text-xs text-gray-500">
                            ({breakdown.reportedBy.role})
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => openModal(breakdown)}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 hover:shadow-lg cursor-pointer ${getStatusColor(
                              breakdown.status
                            )}`}
                          >
                            {breakdown.status}
                          </button>
                        </td>
                        <td className="px-6 py-4 text-gray-400">
                          {formatDate(breakdown.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedBreakdown && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
            {/* Header */}
            <div className="bg-gray-700/50 px-6 py-4 border-b border-gray-600">
              <h3 className="text-xl font-semibold text-white">
                Modifier le Statut
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Machine: {selectedBreakdown.machineId.name}
              </p>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              {updateError && (
                <div className="bg-red-900/30 border border-red-500/50 text-red-300 p-3 rounded-lg text-sm">
                  {updateError}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description de la panne
                </label>
                <p className="text-gray-400 text-sm bg-gray-700/30 p-3 rounded-lg">
                  {selectedBreakdown.description}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Statut actuel
                </label>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    selectedBreakdown.status
                  )}`}
                >
                  {selectedBreakdown.status}
                </span>
              </div>

              <div>
                <label
                  htmlFor="status-select"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nouveau statut
                </label>
                <select
                  id="status-select"
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-700/30 px-6 py-4 flex justify-end gap-3 border-t border-gray-600">
              <button
                onClick={closeModal}
                disabled={updating}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Annuler
              </button>
              <button
                onClick={handleUpdateStatus}
                disabled={updating || newStatus === selectedBreakdown.status}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {updating && (
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                )}
                {updating ? "Mise à jour..." : "Mettre à jour"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreakdownsList;
