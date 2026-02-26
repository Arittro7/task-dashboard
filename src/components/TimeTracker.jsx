const TimeTracker = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-gray-800 font-medium mb-4">Time Tracker</h3>
      <p className="text-4xl font-bold text-gray-800 text-center">01:24:08</p>
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full w-full flex justify-center items-center">
        <span className="mr-2">⏸</span> Pause
      </button>
    </div>
  );
};

export default TimeTracker;