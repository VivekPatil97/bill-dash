import React from "react";

const menuItems = [
  { label: "Dashboard", icon: "🏠", href: "/dashboard" },
  { label: "Invoices", icon: "🧾", href: "/invoices" },
  { label: "Payments", icon: "💳", href: "/payments" },
  { label: "Customers", icon: "👥", href: "/customers" },
  { label: "Settings", icon: "⚙️", href: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 text-slate-100 shadow-xl">
      <div className="px-6 py-7 border-b border-slate-800">
        <h1 className="text-2xl font-semibold">Bill Dash</h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage billing and reports
        </p>
      </div>

      <nav className="px-4 py-5">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-slate-800 hover:text-white"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto px-6 py-5 border-t border-slate-800">
        <div className="rounded-2xl bg-slate-900 p-4 text-slate-300">
          <p className="text-sm font-medium">Need help?</p>
          <p className="mt-2 text-xs text-slate-500">
            Check our billing resources anytime.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
