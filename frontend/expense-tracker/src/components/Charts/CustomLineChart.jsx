import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const CustomLineChart = ({ data }) => {
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
        <AreaChart data={data}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFD700" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#FF8C00" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="none" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#ccc" }}
            stroke="none"
          />
          <YAxis tick={{ fontSize: 12, fill: "#ccc" }} stroke="none" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#FFD700"
            fill="url(#incomeGradient)"
            strokeWidth={3}
            dot={{ r: 3, fill: "#FFB800" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
