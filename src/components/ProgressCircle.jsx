const ProgressCircle = ({ value }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-gray-800 font-medium mb-4">Project Progress</h3>
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
          <circle cx="50" cy="50" r="45" fill="none" stroke="#22c55e" strokeWidth="10" strokeDasharray="283" strokeDashoffset={283 * (1 - value / 100)} transform="rotate(-90 50 50)" />
        </svg>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-gray-800">{value}%</p>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        <span className="w-3 h-3 bg-green-600 rounded"></span>
        <span className="w-3 h-3 bg-green-400 rounded"></span>
        <span className="w-3 h-3 bg-gray-200 rounded"></span>
      </div>
      <p className="text-center text-sm text-gray-500 mt-2">Project Ended</p>
    </div>
  );
};

export default ProgressCircle;