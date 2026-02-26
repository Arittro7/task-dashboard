import { AiOutlineArrowUp  } from "react-icons/ai";

const StatCard = ({ title, value, change, isGreen }) => {
  return (
    <div
      className={`p-4 rounded-xl h-40 shadow-md ${isGreen ? "bg-[#1d734c] text-black" : "bg-white text-gray-800"}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3
          className={`text-2xl font-semibold ${isGreen ? "text-white" : "text-gray-600"} font-medium`}
        >
          {title}
        </h3>
        <AiOutlineArrowUp className="bg-white rounded-full w-7 h-7 p-1 rotate-45 "/>
      </div>
      <p
        className={`text-6xl text-left font-bold ${isGreen ? "text-white" : "text-primary"}`}
      >
        {value}
      </p>
      <p
        className={`text-left mt-2 ${isGreen ? "text-green-200" : "text-green-500"} text-sm mt-1`}
      >
       <span className="border-2 p-1 rounded-sm">{change}</span>  Increased from last month
      </p>
    </div>
  );
};

export default StatCard;
