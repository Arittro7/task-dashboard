const TeamCollaboration = ({ users }) => {
  const team = users.slice(0, 4).map((user, idx) => ({
    name: user.name,
    workingOn: ['GitHub Project Repository', 'Integrate User Authentication System', 'Development and Filter Functionality', 'Responsive Language'][idx],
    status: ['Completed', 'In Progress', 'Pending', 'In Progress'][idx],
    statusColor: ['green', 'yellow', 'gray', 'yellow'][idx],
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md col-span-1 lg:col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 font-medium">Team Collaboration</h3>
        <button className="text-primary font-medium">+ Add Member</button>
      </div>
      {team.map((member, idx) => (
        <div key={idx} className="flex items-center mb-4">
          <img src={`https://via.placeholder.com/40?text=${member.name[0]}`} alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
          <div className="flex-1">
            <p className="font-medium text-gray-800">{member.name}</p>
            <p className="text-sm text-gray-500">{member.workingOn}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm bg-${member.statusColor}-100 text-${member.statusColor}-800`}>
            {member.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TeamCollaboration;