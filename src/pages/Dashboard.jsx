/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from "react";
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
import { motion } from "framer-motion";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
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
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const stats = {
    totalProjects: 24,
    ended: 10,
    running: 12,
    pending: 2,
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex h-screen bg-lightBg overflow-hidden"
    >
      <Sidebar logout={logout} />
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <Header />
        <div className="p-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard title="Total Projects" value={stats.totalProjects} change="+2" isGreen={true} />
            <StatCard title="Ended Projects" value={stats.ended} change="+1" />
            <StatCard title="Running Projects" value={stats.running} change="+3" />
            <StatCard title="Pending Project" value={stats.pending} change="0" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <BarChart data={data.analytics} />
            <Reminder />
            <ProjectList projects={data.products} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <TeamCollaboration users={data.users} />
            <ProgressCircle value={41} />
            <TimeTracker />
          </div>
          <div className="bg-darkPrimary text-white p-6 rounded-xl shadow-md max-w-sm">
            <h3 className="font-bold mb-2">Download Our Mobile App</h3>
            <p className="text-sm mb-4">Get easy in App way.</p>
            <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium w-full">
              Download
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
