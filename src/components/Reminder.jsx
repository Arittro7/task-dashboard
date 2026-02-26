const Reminder = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-gray-800 font-medium mb-4">Reminders</h3>
      <div className="bg-primary p-4 rounded-lg">
        <p className="font-bold">Meeting with Arc Company</p>
        <p className="text-sm">Time: 02:00 pm - 04:00 pm</p>
        <button className="mt-4 bg-white text-primary px-4 py-2 rounded-lg font-medium w-full">
          Start Meeting
        </button>
      </div>
    </div>
  );
};

export default Reminder;