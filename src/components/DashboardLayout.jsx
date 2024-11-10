import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      {/* Navbar */}
      <header className="w-full max-w-4xl flex justify-between items-center bg-white p-6 rounded shadow-md mb-6">
        <Link to="/" className="text-2xl font-bold text-blue-500">
          Dashboard
        </Link>

        {/* User login/logout section */}
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Logged in as Admin</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login as Admin
          </Link>
        )}
      </header>

      {/* Main Content with Outlet for nested routes */}
      <main className="w-full max-w-4xl bg-white p-6 rounded shadow-md">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl mt-6 bg-white p-4 rounded shadow-md text-center text-gray-600">
        © 2023 Dashboard App
      </footer>
    </div>
  );
};

export default DashboardLayout;
