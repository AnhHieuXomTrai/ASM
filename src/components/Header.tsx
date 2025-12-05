import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="w-full bg-[#003580] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-3xl font-bold tracking-tight">
            Travel<span className="text-yellow-400">VIP</span>
          </div>

          <nav className="flex items-center space-x-6 text-sm">
            <NavLink
              to="/home"
              className="flex items-center space-x-2 px-4 py-2 border border-white/40 rounded-full hover:bg-white/10"
            >
              <span>🏠</span>
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/tour"
              className="flex items-center space-x-2 hover:underline"
            >
              <span>📋</span>
              <span>Tour</span>
            </NavLink>
            <NavLink
              to="/about"
              className="flex items-center space-x-2 hover:underline"
            >
              <span>ℹ️</span>
              <span>About</span>
            </NavLink>

            <a className="flex items-center space-x-2 hover:underline cursor-pointer">
              <span> 🎫 </span>
              <span>Bookings</span>
            </a>
          </nav>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-3 py-1 rounded-full bg-white text-black shadow-sm w-60 outline-none"
          />
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <div className="text-lg cursor-pointer hover:underline"></div>

          <NavLink to="/register">
            <button className="bg-white text-[#003580] px-4 py-2 rounded-md font-medium hover:bg-gray-100">
              Đăng ký
            </button>
          </NavLink>

          <NavLink to="/login">
            <button className="bg-white text-[#003580] px-4 py-2 rounded-md font-medium hover:bg-gray-100">
              Đăng Nhập
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
export default Header;
