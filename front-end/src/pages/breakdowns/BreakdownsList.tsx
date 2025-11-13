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

      
    </div>
  );
};

export default BreakdownsList;
