import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const CustomBarChart = ({ data }) => {
  const getBarColor = (index) => (index % 2 === 0 ? "#FFD700" : "#FF8C00"); // gradient-inspired warm colors

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 text-gray-200 shadow-md rounded-lg p-2 border border-gray-700">
          <p className="text-xs font-semibold text-yellow-400 mb-1">
            {payload[0].payload.category}
          </p>
          <p className="text-sm">
            Amount:{" "}
            <span className="font-medium text-white">
              ${payload[0].payload.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-900 mt-6 p-4 rounded-xl shadow-black/20">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#ccc" }}
            stroke="none"
          />
          <YAxis tick={{ fontSize: 12, fill: "#ccc" }} stroke="none" />
          <Tooltip content={CustomTooltip} />
          <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
