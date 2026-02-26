const ProjectList = ({ projects }) => {
  const projectData = projects.slice(0, 4).map((proj, index) => ({
    name: proj.name,
    dueDate: ['Nov 20, 2024', 'Nov 28, 2024', 'Nov 30, 2024', 'Dec 6, 2024'][index],
    icon: ['blue-icon.svg', 'green-icon.svg', 'yellow-icon.svg', 'purple-icon.svg'][index],  // Add to public
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 text-2xl font-semibold">Project</h3>
        <button className="text-primary font-medium border-2 rounded-full bg-gray-100 px-3 py-1">+ New</button>
      </div>
      {projectData.map((proj, idx) => (
        <div key={idx} className="flex items-center mb-4">
          <img src={proj.icon} alt="Icon" className="w-6 h-6 mr-3" />  {/* Real icons */}
          <p className="flex-1 text-gray-800 font-medium">{proj.name}</p>
          <p className="text-sm text-gray-500">Due date: {proj.dueDate}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;