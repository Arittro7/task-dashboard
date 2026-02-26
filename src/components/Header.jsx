import { AiOutlineMail, AiOutlineBell } from "react-icons/ai";
import user from "../assets/user.png";

const Header = () => {
  return (
    <div>
      <div className="bg-gray-100 ml-2 p-4 flex items-center justify-between shadow-md">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search task"
            className="w-full border border-gray-300 bg-white p-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">#F</span>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-4 mr-4 ">
              <AiOutlineMail className="text-gray-600 size-6 cursor-pointer" />
              <AiOutlineBell className="text-gray-600 size-6 cursor-pointer" />
            </div>

            <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center">
              <img src={user} alt="Profile" className="w-8 h-8 rounded-full" />
            </div>
            <div className="text-right">
              <p className="font-semibold text-left text-2xl text-gray-800">
                Nahid Arman
              </p>
              <p className="text-sm text-gray-500">nahid.arman@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-4">
        <div>
          <h1 className="text-3xl text-left font-bold text-gray-800 ml-6">
            Dashboard
          </h1>
          <p className="text-sm ml-6 mt-3 text-gray-500 mb-6">Plan, prioritize, and accomplish your tasks with ease.</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-[#1d734c] text-white px-4 py-2 rounded-full font-medium hover:bg-darkPrimary transition">
            + Add Project
          </button>
          <button className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Import Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
