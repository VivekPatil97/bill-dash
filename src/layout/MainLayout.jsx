import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />
      {/* Right Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Topbar />

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

export default MainLayout;
