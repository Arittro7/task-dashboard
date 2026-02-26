import { AiOutlineArrowUp } from "react-icons/ai";

const StatCard = ({ title, value, change, isGreen }) => {
  return (
    <div
      className={`p-4 rounded-xl shadow-md ${isGreen ? "bg-primary text-black" : "bg-white text-gray-800"}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3
          className={`${isGreen ? "text-black" : "text-gray-600"} font-medium`}
        >
          {title}
        </h3>
        <AiOutlineArrowUp
          className={`${change.startsWith("+") ? "text-green-400" : "text-gray-400"} text-sm`}
        />
      </div>
      <p
        className={`text-4xl font-bold ${isGreen ? "text-black" : "text-primary"}`}
      >
        {value}
      </p>
      <p
        className={`${isGreen ? "text-green-200" : "text-green-500"} text-sm mt-1`}
      >
        {change} Increased from last month
      </p>
    </div>
  );
};

export default StatCard;
