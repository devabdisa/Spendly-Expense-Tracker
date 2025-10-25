import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { SIDE_MENU_DATA } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route, e) => {
    e.preventDefault();
    if (route === "/logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-gray-800 border-r border-gray-700 p-5 sticky top-[61px] z-20">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        {user?.profileImageUrl ? (
          <img
            src={user?.profileImageUrl || ""}
            alt="profile Image"
            className="w-20 h-20 bg-gray-700 rounded-full"
          />
        ) : (
          <CharAvatar
            fullName={user?.fullName}
            width="w-20"
            height="h-20"
            style="text-xl text-yellow-400"
          />
        )}

        <h5 className="text-gray-200 font-medium leading-6">
          {user?.fullName || ""}
        </h5>
      </div>

      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          type="button"
          className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 ${
            activeMenu === item.label
              ? "text-white bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"
              : "text-gray-200 hover:bg-gray-700"
          }`}
          onClick={(e) => handleClick(item.path, e)}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
