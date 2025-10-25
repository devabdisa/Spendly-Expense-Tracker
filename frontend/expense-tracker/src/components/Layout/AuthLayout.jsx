import CARD_2 from "../../assets/images/chart_1.jpg";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left section */}
      <div className="w-screen h-screen md:w-[60vw] px-8 pb-12 bg-gray-900 text-gray-200">
        <h2 className="text-lg font-medium text-white">Expense Tracker</h2>
        {children}
      </div>

      {/* Right decorative section */}
      <div className="hidden md:block w-[40vw] h-screen bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-800 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-gradient-to-r from-yellow-400 via-orange-500 to-red-600 absolute top-[30%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 absolute -bottom-7 -left-7" />

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"
          />
        </div>

        <img
          src={CARD_2}
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-orange-500/20"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-gray-800 p-4 rounded-xl shadow-lg shadow-black/20 border border-gray-700/50 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-400 mb-1">{label}</h6>
        <span className="text-[20px] text-white">${value}</span>
      </div>
    </div>
  );
};
