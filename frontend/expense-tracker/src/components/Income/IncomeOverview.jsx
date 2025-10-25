import { useEffect, useState } from "react";
import { prepareIncomeBarChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart";
import { LuPlus } from "react-icons/lu";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card bg-gray-900 border border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg text-white">Income Overview</h5>
          <p className="text-xs text-gray-400 mt-0.5">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>

        <button
          className="add-btn bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white"
          onClick={onAddIncome}
        >
          {" "}
          <LuPlus className="text-lg  text-white" />{" "}
          <p className="text-white">Add Income</p>
        </button>
      </div>
      <div className="mt-10">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
};

export default IncomeOverview;
