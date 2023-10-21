import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Base = () => {
  const {pizza, addBase} = useGlobalContext()

  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  return (
    <div className="container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
           let baseSelected = pizza.base === base ? "active" : ""
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={baseSelected}>{base}</span>
            </li>
          );
        })}
      </ul>
      {pizza.base && <Link to="/toppings">
        <button>Next</button>
      </Link>}
    </div>
  );
};

export default Base;
