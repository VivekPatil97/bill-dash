import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();

  const ValidateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    if (!ValidateEmail(formData.email)) {
      setFormErrors(["Please enter a valid email address."]);
      return;
    }
    if (!formData.password || formData.password !== "Admin@123") {
      setFormErrors(["Invalid username/password. Please try again."]);
      return;
    }
    setFormErrors([]);
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] flex items-center justify-center px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white">
              Bill<span className="text-violet-400">Dash</span>
            </h1>
            <p className="text-gray-400 mt-2">Sign in to your account</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>
              <input
                name="password"
                type="current-password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition"
              />
            </div>

            <div className="text-red-700 text-sm px-4 py-1">
              {formErrors.length > 0 &&
                formErrors.map((error, index) => (
                  <p key={index} className="text-red-500 text-sm">
                    {error}
                  </p>
                ))}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="rounded border-gray-600" />
                Remember me
              </label>

              <button
                type="button"
                className="text-violet-400 hover:text-violet-300"
              >
                Forgot password?
              </button>
            </div>

            <button
              onClick={OnSubmit}
              className="w-full py-3 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400 text-sm">
            Don't have an account?{" "}
            <button className="text-violet-400 hover:text-violet-300">
              Sign up
            </button>
          </p>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        .blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          opacity: 0.7;
          animation: breathe 10s ease-in-out infinite;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: #6d28d9;
          top: -150px;
          left: -150px;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: #2563eb;
          bottom: -120px;
          right: -100px;
          animation-delay: 2s;
        }

        .blob-3 {
          width: 350px;
          height: 350px;
          background: #9333ea;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 1s;
        }

        @keyframes breathe {
          0%,
          200% {
            transform: scale(1) translateY(0px);
          }
          50% {
            transform: scale(1.2) translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
