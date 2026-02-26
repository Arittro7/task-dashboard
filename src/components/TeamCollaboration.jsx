const TeamCollaboration = ({ users }) => {
  const team = users.slice(0, 4).map((user, idx) => ({
    name: user.name,
    workingOn: ['Working on GitHub Project Repository', 'Working on Integrate User Authentication System', 'Working on Development and Filter Functionality', 'Working on Responsive Language'][idx],
    status: ['Completed', 'In Progress', 'Pending', 'In Progress'][idx],
    statusColor: ['green-200', 'yellow-200', 'gray-200', 'yellow-200'][idx],
    textColor: ['green-800', 'yellow-800', 'gray-800', 'yellow-800'][idx],
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 text-2xl font-semibold">Team Collaboration</h3>
        <button className="text-primary font-medium border-2 rounded-2xl px-3 p-1">+ Add Member</button>
      </div>
      {team.map((member, idx) => (
        <div key={idx} className="flex items-center mb-4">
          <img src={`https://via.placeholder.com/40?text=${member.name[0]}`} alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
          <div className="flex-1">
            <p className="font-medium text-gray-800">{member.name}</p>
            <p className="text-sm text-gray-500">{member.workingOn}</p>
          </div>
          <span className={`px-3 py-1 rounded text-sm bg-${member.statusColor} text-${member.textColor}`}>
            {member.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TeamCollaboration;