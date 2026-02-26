import { BarChart as ReChart, Bar, XAxis, Tooltip, Cell } from 'recharts';

const BarChart = ({ data }) => {
  const chartData = data.slice(0, 7).map(item => ({ day: item.date.slice(-2), value: item.views }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-gray-800 text-2xl font-semibold text-left mb-4">Project Analytics</h3>
      <svg width="0" height="0">
        <defs>
          <pattern id="stripes" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="#1d734c" strokeWidth="2" />
          </pattern>
        </defs>
      </svg>
      <ReChart width="100%" height={200} data={chartData}>
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'gray' }} />
        <Tooltip />
        <Bar dataKey="value" radius={[10, 10, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#22c55e' : 'url(#stripes) #22c55e'} />
          ))}
        </Bar>
      </ReChart>
    </div>
  );
};

export default BarChart;