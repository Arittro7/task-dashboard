const ProjectList = ({ projects }) => {
  const projectData = projects.slice(0, 4).map((proj, index) => ({
    name: proj.name,
    dueDate: ['Nov 20, 2024', 'Nov 28, 2024', 'Nov 30, 2024', 'Dec 6, 2024'][index],
    iconColor: ['blue', 'green', 'yellow', 'purple'][index],
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 font-medium">Project</h3>
        <button className="text-primary font-medium">+ New</button>
      </div>
      {projectData.map((proj, idx) => (
        <div key={idx} className="flex items-center mb-3">
          <div className={`w-6 h-6 rounded-full bg-${proj.iconColor}-500 mr-3`}></div>  {/* Placeholder icon */}
          <p className="flex-1 text-gray-800">{proj.name}</p>
          <p className="text-sm text-gray-500">Due date: {proj.dueDate}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;