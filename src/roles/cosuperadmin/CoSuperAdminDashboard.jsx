import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/SidebarCoSuperAdmin";

function CoSuperAdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <Sidebar isOpen={sidebarOpen} setOpen={setSidebarOpen} />
      </div>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 flex-1 p-8 overflow-y-auto bg-gray-100 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <h1 className="text-3xl font-bold text-primary mb-6">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* Admin Users Card */}
          <Link
            to="/cosuperadmin/admins"
            className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center flex-col hover:shadow-lg transition hover:scale-105"
          >
            <div className="text-4xl mb-2">👤</div>
            <h2 className="text-xl font-semibold text-primary">Admin Users</h2>
          </Link>

          {/* Departments Card */}
          <Link
            to="/cosuperadmin/departments"
            className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center flex-col hover:shadow-lg transition hover:scale-105"
          >
            <div className="text-4xl mb-2">🏛️</div>
            <h2 className="text-xl font-semibold text-primary">Departments</h2>
          </Link>

          {/* Themes Card */}
          <Link
            to="/cosuperadmin/themes"
            className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center flex-col hover:shadow-lg transition hover:scale-105"
          >
            <div className="text-4xl mb-2">🎨</div>
            <h2 className="text-xl font-semibold text-primary">Themes</h2>
          </Link>

          {/* Logs Card */}
          <Link
            to="/cosuperadmin/logs"
            className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center flex-col hover:shadow-lg transition hover:scale-105"
          >
            <div className="text-4xl mb-2">📝</div>
            <h2 className="text-xl font-semibold text-primary">Logs</h2>
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded-lg overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-4 text-center align-middle">Department</th>
                <th className="p-4 text-center align-middle">Timestamp</th>
                <th className="p-4 text-center align-middle">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="p-4 text-black text-center align-middle">
                  College of Engineering
                </td>
                <td className="p-4 text-black text-center align-middle">
                  March 23, 2025 10:42 AM
                </td>
                <td className="p-4 text-center align-middle">
                  <div className="flex justify-center gap-3">
                    <button className="!bg-primary !text-white px-4 py-2 rounded-md hover:!bg-primary transition-colors">
                      Edit
                    </button>
                    <button className="!bg-primary !text-white px-4 py-2 rounded-md hover:!bg-primary transition-colors">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default CoSuperAdminDashboard;