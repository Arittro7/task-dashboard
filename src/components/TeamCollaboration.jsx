import meImg from '../assets/me.png';

const TeamCollaboration = ({ users }) => {
  const team = users.slice(0, 4).map((user, idx) => ({
    name: user.name,
    workingOn: ['Working on', 'Working on', 'Working on', 'Working on'][idx],
    workingOnDetails: ['GitHub Project Repository', 'Integrate User Authentication System', 'Development and Filter Functionality', 'Responsive Language'][idx],
    status: ['Completed', 'In Progress', 'Pending', 'In Progress'][idx],
    statusColor: ['green-200', 'yellow-200', 'gray-200', 'yellow-200'][idx],
    textColor: ['green-800', 'yellow-800', 'gray-800', 'yellow-800'][idx],
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 text-2xl font-semibold">Team Collaboration</h3>
        <button className="text-primary font-medium border border-gray-300 rounded-full px-3 py-1">+ Add Member</button>
      </div>
      {team.map((member, idx) => (
        <div key={idx} className="flex items-center mb-4">
          <img src={meImg} alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
          <div className="flex-1 text-left ml-2.5">
            <p className="font-medium text-gray-800 text-xl font-semibold">{member.name}</p>
            <p className="text-sm text-gray-500">{member.workingOn} 
              <span className='text-black font-semibold'> {member.workingOnDetails}</span></p>
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