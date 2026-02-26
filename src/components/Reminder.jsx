import { TiVideo } from "react-icons/ti";

const Reminder = () => {
  return (
    <div className="bg-white text-left p-6 rounded-xl shadow-md flex flex-col h-full">
      <h3 className="text-gray-800 text-2xl text-left font-semibold mb-4">Reminders</h3>
      <div className="p-4 rounded-lg flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="font-semibold text-3xl ">Meeting with Oct Company</p>
          <p className="text-sm mt-2">Time: 02:00 pm - 04:00 pm</p>
        </div>
        <button className="mt-4 bg-[#1d734c] text-white text-primary px-4 py-2 rounded-lg font-medium w-full flex items-center justify-center gap-2">
          <TiVideo />
          <span>Start Meeting</span>
        </button>
      </div>
    </div>
  );
};

export default Reminder;