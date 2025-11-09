import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

interface MachineFormData {
  name: string;
  reference: string;
  status: "Active" | "Breakdown" | "Maintenance";
  temperature: number;
  speed: number;
  production: number;
  image?: string;
}

const AddMachine: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState<MachineFormData>({
    name: "",
    reference: "",
    status: "Active",
    temperature: 0,
    speed: 0,
    production: 0,
    image: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "temperature" || name === "speed" || name === "production"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Validation
    if (!formData.name.trim()) {
      setError("Le nom de la machine est requis");
      return;
    }
    if (!formData.reference.trim()) {
      setError("La référence est requise");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/machines",
        formData
      );

      console.log("Machine ajoutée:", response.data);
      setSuccessMessage(
        response.data.message || "Machine ajoutée avec succès !"
      );
      setFormData({
        name: "",
        reference: "",
        status: "Active",
        temperature: 0,
        speed: 0,
        production: 0,
        image: "",
      });

      // Rediriger vers la liste après 2 secondes
      setTimeout(() => {
        navigate("/machines");
      }, 2000);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(
          err.response.data.error || "Erreur lors de l'ajout de la machine"
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erreur inconnue. Veuillez réessayer.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-4xl">
            {/* Page Heading */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => navigate("/machines")}
                className="flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-inset ring-slate-300 dark:ring-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <span className="material-symbols-outlined text-xl">
                  arrow_back
                </span>
              </button>
              <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
                Add New Machine
              </h1>
            </div>

            {/* Success Message */}
            {successMessage && (
              <div className="mb-6 rounded-lg bg-green-50 dark:bg-green-500/10 p-4">
                <p className="text-green-800 dark:text-green-400">
                  {successMessage}
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 rounded-lg bg-red-50 dark:bg-red-500/10 p-4">
                <p className="text-red-800 dark:text-red-400">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="rounded-xl bg-white dark:bg-slate-800/50 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm p-6">
                {/* Basic Information */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                      Basic Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Machine Name */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Machine Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border-0 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-primary placeholder:text-slate-400"
                          placeholder="e.g., CNC Milling Machine"
                          required
                        />
                      </div>

                      {/* Reference */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Reference <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="reference"
                          value={formData.reference}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border-0 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-primary placeholder:text-slate-400"
                          placeholder="e.g., REF-0001A"
                          required
                        />
                      </div>

                      {/* Status */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Status
                        </label>
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border-0 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-primary"
                        >
                          <option value="Active">Active</option>
                          <option value="Maintenance">Maintenance</option>
                          <option value="Breakdown">Breakdown</option>
                        </select>
                      </div>

                      {/* Image URL */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Image URL (Optional)
                        </label>
                        <input
                          type="url"
                          name="image"
                          value={formData.image}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border-0 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-primary placeholder:text-slate-400"
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Temperature */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Temperature (°C)
                        </label>
                        <input
                          type="number"
                          name="temperature"
                          value={formData.temperature}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border-0 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-primary"
                          placeholder="0"
                          min="0"
                        />
                      </div>

                      {/* Speed */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Speed (RPM)
                        </label>
                        <input
                          type="number"
                          name="speed"
                          value={formData.speed}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border-0 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-primary"
                          placeholder="0"
                          min="0"
                        />
                      </div>

                      {/* Production */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Production (u/hr)
                        </label>
                        <input
                          type="number"
                          name="production"
                          value={formData.production}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border-0 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-primary"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="mt-8 flex items-center justify-end gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => navigate("/machines")}
                    className="rounded-lg h-10 px-6 text-sm font-semibold text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin material-symbols-outlined text-base">
                          progress_activity
                        </span>
                        Adding...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-base">
                          check
                        </span>
                        Add Machine
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </main>
    </div>
  );
};

export default AddMachine;
