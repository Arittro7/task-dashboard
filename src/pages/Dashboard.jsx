/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import api from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import BarChart from "../components/BarChart";
import Reminder from "../components/Reminder";
import ProjectList from "../components/ProjectList";
import TeamCollaboration from "../components/TeamCollaboration";
import ProgressCircle from "../components/ProgressCircle";
import TimeTracker from "../components/TimeTracker";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState({
    overview: {},
    users: [],
    analytics: [],
    products: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/dashboard");
        setData(res.data);
      } catch (err) {
        console.error("Dashboard data fetch failed", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        logout={logout}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col">
        {/* Mobile top bar */}
        <div className="lg:hidden bg-white shadow-sm px-4 py-3.5 flex items-center justify-between sticky top-0 z-40">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl text-gray-700"
          >
            ☰
          </button>

          <div className="font-bold text-xl text-[#1d734c]">Arittro</div>

          {/* <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center">
            <img
              src="/path/to/user.png"
              alt="user"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div> */}
        </div>

        {/* Scrollable main content */}
        <div className="flex-1 overflow-y-auto pb-8">
          <div className="px-4 sm:px-6 lg:px-8 pt-6">
            <Header />

            {/* Stats cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 mb-8">
              <StatCard title="Total Projects" value={24} change="5%" isGreen={true} />
              <StatCard title="Ended Projects" value={10} change="6%" />
              <StatCard title="Running Projects" value={12} change="2%" />
              <StatCard title="Pending Project" value={2} change="On Discuss" isTextChange />
            </div>

            {/* Main responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
              {/* Left + center content */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-9 gap-5 lg:gap-6">
                <div className="md:col-span-6">
                  <BarChart data={data.analytics} />
                </div>
                <div className="md:col-span-3">
                  <Reminder />
                </div>

                <div className="md:col-span-5">
                  <TeamCollaboration users={data.users} />
                </div>

                <div className="md:col-span-4">
                  <ProgressCircle value={41} />
                </div>
              </div>

              {/* Right column → becomes bottom section on mobile */}
              <div className="lg:col-span-3 flex flex-col gap-5 lg:gap-6">
                <div className="flex-1">
                  <ProjectList projects={data.products} />
                </div>
                <div>
                  <TimeTracker />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;