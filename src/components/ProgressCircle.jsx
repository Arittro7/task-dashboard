const ProgressCircle = ({ value }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-gray-800 font-semibold text-2xl text-left mb-4">
        Project Progress
      </h3>
      <div className="relative w-40 h-40 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#22c55e"
            strokeWidth="10"
            strokeDasharray="283"
            strokeDashoffset={283 * (1 - value / 100)}
            transform="rotate(-90 50 50)"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#15803d"
            strokeWidth="10"
            strokeDasharray="283"
            strokeDashoffset={283 * (1 - 0.7)}
            transform="rotate(-90 50 50)"
          />

          {/* Segmented */}
          
        </svg>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-800">
          {value}%
        </p>
      </div>
      <p className="text-center text-gray-800 font-medium mt-2">
        Project Ended
      </p>
      <div className="flex justify-center mt-4 space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-600 rounded mr-2"></span> Completed
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-400 rounded mr-2"></span> In
          Progress
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-gray-200 rounded mr-2 striped"></span>{" "}
          Pending
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
