import { Link } from "react-router-dom";

const navLinks = ["PIZZA", "SIDES", "DESSERTS", "DRINKS"]
const Header = () => {
  return (
    <header className=" bg-white">
      <div className="flex justify-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-900 mt-2">Pizza Hot</h1>
        </Link>
      </div>
      <hr />
      <div className="mt-2">
          <ul className="flex justify-center gap-6">
            <li className="text-black font-bold hover:text-red-700 cursor-pointer">MENU</li>
            <li className="text-black font-bold hover:text-red-700 cursor-pointer">DEALS</li>
          </ul>
      </div>
      <nav className="bg-blue-100 mt-2">
        <ul className="flex justify-between items-center md:justify-center md:gap-10 px-6 py-2 font-bold text-blue-900">
          {navLinks.map((item) => {
            return (
              <li key={item} className="hover:text-red-700 cursor-pointer">{item}</li>
            )
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
