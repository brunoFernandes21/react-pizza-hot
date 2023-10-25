import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const navLinks = ["pizza", "sides", "desserts", "drinks"]

const Header = () => {
  let location = useLocation()
  return (
    <header className=" bg-white">
      <div className="flex justify-center items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-900 p-2">Tropical Pizza</h1>
        </Link>
      </div>
      <hr />
      <div className="mt-2">
          <ul className="flex justify-center gap-6">
            <Link to="/" className={` font-bold hover:text-red-700 cursor-pointer ${location.pathname !== "/deals" ? "text-red-700" : "text-black"}`}>MENU</Link>
            <Link to="/deals" className={`font-bold hover:text-red-700 cursor-pointer ${location.pathname === "/deals" ? "text-red-700" : "text-black"}`}>DEALS</Link>
          </ul>
      </div>
      <nav className="bg-blue-100 mt-2">
        <ul className="flex justify-between items-center md:justify-center md:gap-10 px-6 py-2">
          {navLinks.map((item) => {
            return (
              <Link to={`/${item}`} key={item} className={`hover:text-red-700 cursor-pointer uppercase font-bold ${location.pathname === "/" && item === "pizza" ? "text-red-700" : "text-blue-900"} ${location.pathname === `/${item}` ? "text-red-700" : "text-blue-900"}`}>{item}</Link>
            )
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
