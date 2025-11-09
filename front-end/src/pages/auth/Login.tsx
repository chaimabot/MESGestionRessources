import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // Pour afficher les erreurs
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);

      navigate("/dashboard");
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
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden group/design-root">
        <div className="layout-container flex h-full grow flex-col">
          <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-4 text-gray-800 dark:text-white">
              <div className="size-6 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                    fill="currentColor"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1545 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                Manufacturing Execution System
              </h2>
            </div>
          </header>
          <main className="flex min-h-screen w-full items-center">
            <div className="grid w-full grid-cols-1 md:grid-cols-2">
              <div className="relative hidden h-screen flex-col items-center justify-center bg-gray-900/50 md:flex">
                <img
                  alt="A modern factory floor with advanced machinery and operators monitoring screens."
                  className="absolute inset-0 h-full w-full object-cover opacity-30"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjlcB6Pv_47OrnyrEeeMfdCLaJ2wLO8VLK-v7S-i6e0NsxCfNkd-L68re_-Sqg1hulItNRm9vSP6jKGgFTJ4u7-oBamibIyqnOyN0e6Z3FSxFQTnowIRwg0RT8Jh607HaVYSy-XZryDlIxLiVEpnPwW7jTiZf5SBjQyA37aeYAoZhSREOjALetGZ6B6a5_IonvtKBG_6M9LWwloj5s2k14BcBAi94xV-4nougSED6QtEYIgpOF7FMa1MlKA61128kV5Xytu3TjeRo"
                />
                <div className="relative z-10 text-center text-white p-8">
                  <h1 className="text-4xl font-bold tracking-tight">
                    Streamline Your Production
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Efficiently manage and monitor your manufacturing operations
                    with precision and real-time data.
                  </p>
                </div>
              </div>
              <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark p-4">
                <div className="flex w-full max-w-md flex-col items-center space-y-8 rounded-xl bg-white dark:bg-[#111418] p-8 shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight">
                      Sign In to Your Account
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Enter your credentials to access the system
                    </p>
                  </div>
                  {error && <p className="text-red-500">{error}</p>}

                  <form onSubmit={handleSubmit} className="w-full space-y-6">
                    <div className="flex flex-col">
                      <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">
                          Email
                        </p>
                        <div className="relative flex w-full items-center">
                          <span className="material-symbols-outlined absolute left-3 text-gray-400 dark:text-gray-500">
                            person
                          </span>
                          <input
                            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#3b4754] bg-background-light dark:bg-[#1c2127] focus:border-primary dark:focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal pl-10"
                            placeholder="Enter your email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">
                          Password
                        </p>
                        <div className="relative flex w-full items-center">
                          <span className="material-symbols-outlined absolute left-3 text-gray-400 dark:text-gray-500">
                            lock
                          </span>
                          <input
                            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#3b4754] bg-background-light dark:bg-[#1c2127] focus:border-primary dark:focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal pl-10 pr-10"
                            placeholder="Enter your password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            aria-label="Toggle password visibility"
                            className="material-symbols-outlined absolute right-3 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? "visibility_off" : "visibility"}
                          </button>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        className="text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      className="flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </form>
                  <p className="text-gray-500 dark:text-gray-400 mt-4">
                    You don't have a compte ?{" "}
                    <span
                      className="text-primary cursor-pointer"
                      onClick={() => navigate("/register")}
                    >
                      Sign Up
                    </span>
                  </p>
                  <footer className="pt-4 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      © 2024 Your Company. All Rights Reserved.
                    </p>
                  </footer>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
