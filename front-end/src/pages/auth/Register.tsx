import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("technicien"); // par défaut
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name,
          email,
          password,
          role,
        }
      );

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.error || "Erreur inconnue");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erreur inconnue. Veuillez réessayer.");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="flex w-full max-w-md flex-col items-center space-y-6 rounded-xl bg-white dark:bg-[#111418] p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Créer un compte
        </h1>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Nom */}
          <div>
            <label className="block text-gray-800 dark:text-white mb-1">
              Nom complet
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-[#3b4754] p-3 bg-background-light dark:bg-[#1c2127] text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-800 dark:text-white mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-[#3b4754] p-3 bg-background-light dark:bg-[#1c2127] text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-800 dark:text-white mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-[#3b4754] p-3 bg-background-light dark:bg-[#1c2127] text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Rôle */}
          <div>
            <label className="block text-gray-800 dark:text-white mb-1">
              Rôle
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-[#3b4754] p-3 bg-background-light dark:bg-[#1c2127] text-gray-900 dark:text-white"
            >
              <option value="responsable">Responsable</option>
              <option value="technicien">Technicien</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-3 text-white font-semibold hover:bg-primary/90 transition"
          >
            S’inscrire
          </button>
        </form>

        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Déjà un compte ?{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Se connecter
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
