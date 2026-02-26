import bgImg from "../assets/bgImg.png";
import { FaPause, FaStop } from "react-icons/fa6";

const TimeTracker = () => {
  return (
    <div
      className=" text-white text-2xl text-left p-3 rounded-xl bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <h1 className="text-3xl font-semibold mt-2">Time Tracker</h1>
      <p className="text-5xl font-bold text-center mt-10">01:24:08</p>
      <div className="flex items-center justify-center mt-2 gap-2">
        <FaPause className="bg-white text-black rounded-full p-1" />
        <FaStop className="bg-red-500 rounded-full p-1" />
      </div>
    </div>
  );
};

export default TimeTracker;
