// Sidebar.jsx
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
import bgImg from "../assets/bgImg.png";

const Sidebar = ({ logout, isOpen, onClose }) => {
  const menuItems = [
    { icon: AiFillDashboard, label: "Dashboard", active: true },
    { icon: AiOutlineFileText, label: "Tasks", badge: "12" },
    { icon: AiFillCalendar, label: "Calendar" },
    { icon: AiOutlineBarChart, label: "Analytics" },
    { icon: AiOutlineTeam, label: "Team" },
  ];

  const generalItems = [
    { icon: AiOutlineSetting, label: "Settings" },
    { icon: AiOutlineQuestionCircle, label: "Help" },
    { icon: AiOutlineLogout, label: "Logout", onClick: logout },
  ];

  const sidebarContent = (
    <>
      <div className="text-[#1d734c] font-bold text-2xl mb-10">Arittro</div>

      <p className="text-gray-500 text-xs uppercase font-semibold mb-4 tracking-wider">MENU</p>
      <ul className="space-y-2 mb-10">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className={`flex items-center gap-3 px-4 py-3 rounded-r-xl cursor-pointer transition-colors ${
              item.active
                ? "bg-white text-[#1d734c] font-semibold border-l-4 border-[#1d734c]"
                : "text-gray-700 hover:bg-gray-200/60"
            }`}
          >
            <item.icon className="text-xl" />
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-[#1d734c] text-white text-xs px-2.5 py-1 rounded-full">
                {item.badge}
              </span>
            )}
          </li>
        ))}
      </ul>

      <p className="text-gray-500 text-xs uppercase font-semibold mb-4 tracking-wider">GENERAL</p>
      <ul className="space-y-2">
        {generalItems.map((item, i) => (
          <li
            key={i}
            onClick={item.onClick}
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-200/60 rounded-r-xl cursor-pointer transition-colors"
          >
            <item.icon className="text-xl" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      {/* Mobile app promo */}
      <div
        className="mt-auto mb-8 text-white rounded-2xl bg-cover bg-center p-5 shadow-lg"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <RiPoliceBadgeLine className="text-3xl mb-2" />
        <h4 className="font-semibold text-lg">
          Download our <span className="font-bold">Mobile App</span>
        </h4>
        <p className="text-sm opacity-90 mt-1 mb-4">Get easy access anywhere</p>
        <button className="bg-green-900 hover:bg-green-800 text-white text-sm font-medium py-2 px-4 rounded-xl w-full transition">
          Download Now
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* DESKTOP sidebar - hidden on mobile */}
      <div className="hidden lg:flex lg:w-72 lg:shrink-0 lg:flex-col lg:bg-gray-100 lg:h-screen lg:p-6 lg:overflow-y-auto">
        {sidebarContent}
      </div>

      {/* MOBILE drawer */}
      <div
        className={`
          fixed inset-0 z-50 lg:hidden transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div className="relative w-80 max-w-[85vw] h-full bg-gray-100 p-6 flex flex-col overflow-y-auto">
          <button
            className="absolute top-5 right-5 text-gray-700 text-2xl"
            onClick={onClose}
          >
            ×
          </button>
          {sidebarContent}
        </div>
      </div>
    </>
  );
};

export default Sidebar;