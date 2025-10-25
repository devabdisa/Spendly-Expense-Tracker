import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#FFD700", "#FF8C00", "#FF4500", "#4f39f6"]; // Warm gradient-inspired

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balance = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expense", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg text-white">Financial Overview</h5>
      </div>

      <CustomPieChart
        data={balance}
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;
