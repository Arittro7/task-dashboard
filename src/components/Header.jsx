import { AiOutlineMail, AiOutlineBell } from "react-icons/ai";
import user from "../assets/user.png";

const Header = () => {
  return (
    <div className="space-y-5 md:space-y-6">

      {/* 🚀 Top row: search + icons + profile (mobile: stack or compact) */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs md:max-w-md">
          <input
            type="text"
            placeholder="Search task"
            className="w-full border border-gray-300 bg-white py-2.5 px-4 pr-10 rounded-lg 
                       text-sm focus:outline-none focus:ring-2 focus:ring-[#1d734c] 
                       placeholder:text-gray-400"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
            #F
          </span>
        </div>

        {/* 🚀 User area – icons + avatar + name (compact on mobile) */}
        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <AiOutlineMail className="text-gray-600 text-xl sm:text-2xl cursor-pointer" />
            <AiOutlineBell className="text-gray-600 text-xl sm:text-2xl cursor-pointer" />
          </div>

          {/* 🚀 Avatar + name/email – shrink text on small screens */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-400 flex items-center justify-center shrink-0">
              <img
                src={user}
                alt="Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
              />
            </div>

            <div className="text-left min-w-0">
              <p className="font-semibold text-gray-800 text-base sm:text-lg truncate">
                Nahid Arman
              </p>
              <p className="text-xs sm:text-sm text-gray-500 truncate">
                nahid.arman@example.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🚀 Bottom row: Dashboard title + subtitle + action buttons */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-left">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1.5 text-left">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>

        {/* 🚀 Action buttons – stack on very small screens, side-by-side otherwise */}
        <div className="flex flex-wrap gap-3">
          <button className="bg-[#1d734c] text-white px-5 py-2.5 rounded-full font-medium text-sm sm:text-base hover:bg-[#185c3d] transition whitespace-nowrap">
            + Add Project
          </button>
          <button className="bg-white border border-gray-300 text-gray-800 px-5 py-2.5 rounded-full font-medium text-sm sm:text-base hover:bg-gray-50 transition whitespace-nowrap">
            Import Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;