import {
  AiFillDashboard,
  AiFillCalendar,
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineTeam,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiOutlineLogout,
} from "react-icons/ai";

const Sidebar = ({ logout }) => {
  return (
    <div className="w-64 bg-white h-screen p-6 shadow-md flex flex-col">
      <div className="text-primary font-bold text-xl mb-10">Arittro</div>{" "}
      {/* Kept as per your note */}
      <ul className="space-y-6">
        <li className="flex items-center text-gray-800 font-medium cursor-pointer">
          <AiFillDashboard className="mr-3 text-primary" /> Dashboard
        </li>
        <li className="flex items-center text-gray-800 font-medium cursor-pointer relative">
          <AiOutlineFileText className="mr-3 text-primary" /> Tasks
          <span className="absolute right-0 bg-primary text-black text-xs px-2 py-1 rounded-full">
            12
          </span>{" "}
          {/* Badge as in design */}
        </li>
        <li className="flex items-center text-gray-800 font-medium cursor-pointer">
          <AiFillCalendar className="mr-3 text-primary" /> Calendar
        </li>
        <li className="flex items-center text-gray-800 font-medium cursor-pointer">
          <AiOutlineBarChart className="mr-3 text-primary" /> Analytics
        </li>
        <li className="flex items-center text-gray-800 font-medium cursor-pointer">
          <AiOutlineTeam className="mr-3 text-primary" /> Team
        </li>
        <hr className="my-4 border-gray-200" />
        <li className="flex items-center text-gray-800 font-medium cursor-pointer">
          <AiOutlineSetting className="mr-3 text-primary" /> Settings
        </li>
        <li className="flex items-center text-gray-800 font-medium cursor-pointer">
          <AiOutlineQuestionCircle className="mr-3 text-primary" /> Help
        </li>
        <li
          onClick={logout}
          className="flex items-center text-gray-800 font-medium cursor-pointer"
        >
          <AiOutlineLogout className="mr-3 text-primary" /> Logout
        </li>
      </ul>

      {/* Add mobile app ad as a card */}
        <div className="p-6">
          <div className="bg-darkPrimary text-black p-4 rounded-lg">
            <h3>Download Our Mobile App</h3>
            <button className="bg-primary text-black p-2 rounded">
              Download
            </button>
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
