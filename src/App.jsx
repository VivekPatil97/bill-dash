import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import MainLayout from "./layout/mainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout Route */}
          <Route path="/" element={<MainLayout />}>
            {/* Child Routes */}
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
