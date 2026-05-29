import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white px-6 py-4 shadow">
          <h2 className="text-xl font-semibold">BillDash</h2>

          <nav className="space-x-4">
            <Link to="/dashboard" className="text-slate-700 hover:text-black">
              Dashboard
            </Link>

            <Link to="/login" className="text-slate-700 hover:text-black">
              Login
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white px-6 py-4 text-sm text-slate-500 border-t">
          Copyright 2026
        </footer>
      </div>
    </div>
  );
}
