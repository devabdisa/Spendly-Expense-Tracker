import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex gap-5 border-b border-gray-700 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30 bg-gray-900 text-gray-200">
      <button
        className="block lg:hidden text-gray-200"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>
      <h2 className="text-lg font-medium text-white">Expense Tracker</h2>

      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-gray-900 border border-gray-700 z-40">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
