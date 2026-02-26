import { AiOutlineCode, AiOutlineGlobal, AiOutlineFormatPainter, AiOutlineThunderbolt } from "react-icons/ai";

const ProjectList = ({ projects }) => {
  // Using a mix of real data and design-specific icons
  const icons = [AiOutlineCode, AiOutlineGlobal, AiOutlineFormatPainter, AiOutlineThunderbolt];

  return (
    <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-800 text-xl font-bold">Project</h3>
        <button className="text-gray-500 text-xs font-semibold border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-50 transition">
          + New
        </button>
      </div>
      
      <div className="space-y-6">
        {projects.slice(0, 5).map((proj, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div key={idx} className="flex items-center gap-4">
              <div className="p-2 rounded-xl bg-gray-50 text-[#1d734c]">
                <Icon size={20} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold text-gray-800 leading-tight">{proj.name}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">Due date: {proj.dueDate || "Nov 24, 2024"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;