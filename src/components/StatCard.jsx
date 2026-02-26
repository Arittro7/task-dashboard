import { AiOutlineArrowUp  } from "react-icons/ai";

const StatCard = ({ title, value, change, isGreen, isTextChange }) => {
  return (
    <div className={`p-6 rounded-3xl shadow-sm border border-gray-100 ${isGreen ? "bg-[#1D4D32] text-white" : "bg-white text-gray-800"}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className={`text-lg font-medium ${isGreen ? "text-gray-200" : "text-gray-500"}`}>{title}</h3>
        <div className={`p-2 bg-white text-black rounded-full border ${isGreen ? "border-gray-400" : "border-black"}`}>
          <AiOutlineArrowUp className="rotate-45" />
        </div>
      </div>
      <p className="text-5xl text-left font-bold mb-4">{value}</p>
      <div className="flex items-center gap-2">
        <span className={`text-xs px-2 py-0.5 rounded-full border ${isGreen ? "bg-[#2D5A41] border-green-400" : "bg-gray-50 border-gray-200 text-gray-500"}`}>
          {change}
        </span>
        <span className={`text-xs ${isGreen ? "text-gray-300" : "text-gray-400"}`}>
          {isTextChange ? "" : "Increased from last month"}
        </span>
      </div>
    </div>
  );
};

export default StatCard