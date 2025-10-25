const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-gray-200 shadow-md rounded-lg p-2 border border-gray-700">
        <p className="text-xs font-semibold text-yellow-400 mb-1">
          {payload[0].name}
        </p>
        <p className="text-sm">
          Amount:{" "}
          <span className="font-medium text-white">${payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
