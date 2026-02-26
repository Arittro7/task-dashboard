import {
  AiFillDashboard,
  AiOutlineFileText,
  AiFillCalendar,
  AiOutlineBarChart,
  AiOutlineTeam,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiPoliceBadgeLine } from "react-icons/ri";
import bgImg from "../assets/bgImg.png"

const Sidebar = ({ logout }) => {
  return (
    <div className="w-72 bg-gray-100 h-screen p-6 flex flex-col rounded-r-2xl">
      <div className="text-primary font-bold text-xl mb-8">Arittro</div>
      <p className="text-gray-500 text-sm text-left font-semibold mb-4">MENU</p>
      <ul className="space-y-4">
        <li className="flex items-center text-[#1d734c] font-medium cursor-pointer pl-4 border-l-7 border-primary  bg-white rounded-r-lg py-2">
          <AiFillDashboard className="mr-3 text-primary " /> Dashboard
        </li>
        <li className="flex items-center text-gray-800 font-medium cursor-pointer relative pl-4">
          <AiOutlineFileText className="mr-3 text-primary" /> Tasks
          <span className="absolute right-0 bg-primary text-white text-xs px-2 py-1 rounded-full">12</span>
        </li>
        <li className="flex items-center text-gray-800 font-medium cursor-pointer pl-4">
          <AiFillCalendar className="mr-3 text-primary" /> Calendar
        </li>
        <li className="flex items-center text-gray-800 font-medium cursor-pointer pl-4">
          <AiOutlineBarChart className="mr-3 text-primary" /> Analytics
        </li>
        <li className="flex items-center text-gray-800 font-medium cursor-pointer pl-4">
          <AiOutlineTeam className="mr-3 text-primary" /> Team
        </li>
      </ul>
      <p className="text-gray-500 text-sm text-left font-semibold mt-8 mb-4">GENERAL</p>
      <ul className="space-y-4">
        <li className="flex items-center text-gray-800 font-medium cursor-pointer pl-4">
          <AiOutlineSetting className="mr-3 text-primary" /> Settings
        </li>
        <li className="flex items-center text-gray-800 font-medium cursor-pointer pl-4">
          <AiOutlineQuestionCircle className="mr-3 text-primary" /> Help
        </li>
        <li onClick={logout} className="flex items-center text-gray-800 font-medium cursor-pointer pl-4">
          <AiOutlineLogout className="mr-3 text-primary" /> Logout
        </li>
      </ul>

      {/* Download app */}
      <div 
        className="mt-32 text-white text-2xl text-left p-3 rounded-xl bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${bgImg})`,
          width: '250px',
          height: '230px'
        }}
      >
        <RiPoliceBadgeLine />
        <h1 className=""> <span className="font-semibold">Download</span> our</h1>
        <p>Mobile App</p>
        <p className="text-sm mt-2">Get easy in another way</p>
        <button className="bg-green-800 w-full rounded-2xl py-1 mt-7">Download</button>
      </div>
    </div>
  );
};

export default Sidebar;