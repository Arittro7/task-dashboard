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

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex h-screen bg-[#F8F9FA] overflow-hidden"
    >
      <Sidebar logout={logout} />
      
      <div className="flex-1 overflow-y-auto no-scrollbar p-8">
        <Header />
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-6">
          <StatCard title="Total Projects" value={24} change="5%" isGreen={true} />
          <StatCard title="Ended Projects" value={10} change="6%" />
          <StatCard title="Running Projects" value={12} change="2%" />
          <StatCard title="Pending Project" value={2} change="On Discuss" isText />
        </div>

        {/* Main Grid: 12 Columns */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Left/Middle Content (Col 1-9) */}
          <div className="col-span-9 grid grid-cols-9 gap-6">
            <div className="col-span-6">
              <BarChart data={data.analytics} />
            </div>
            <div className="col-span-3">
              <Reminder />
            </div>
            <div className="col-span-5">
              <TeamCollaboration users={data.users} />
            </div>
            <div className="col-span-4">
              <ProgressCircle value={41} />
            </div>
          </div>

          {/* Right Column: Tall Project List & Tracker (Col 10-12) */}
          <div className="col-span-3 flex flex-col gap-6">
            <div className="flex-grow">
              <ProjectList projects={data.products} />
            </div>
            <TimeTracker />
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;