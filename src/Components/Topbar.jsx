import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Topbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow">
      <h2 className="text-xl font-semibold">BillDash</h2>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      <nav className="flex flex-row">
        
        <Link to="/dashboard" className="text-slate-700 hover:text-black">
          Dashboard
        </Link>

        <Link to="/login" className="text-slate-700 hover:text-black">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Topbar;