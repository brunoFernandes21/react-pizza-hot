import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
const Toppings = () => {
  const { pizza, addToppings } = useGlobalContext();

  const toppings = [
    "Mushrooms",
    "Peppers",
    "Onions",
    "Olives",
    "Extra cheese",
    "Tomatoes",
  ];

  return (
    <div className="container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let toppingSelected = pizza.toppings.includes(topping) ? "active" : ""
          return (
            <li key={topping} onClick={()=> addToppings(topping)}>
              <span className={toppingSelected}>{topping}</span>
            </li>
          )
        })}
      </ul>
      {pizza.toppings.length > 0 && <Link to="/order">
        <button>Order</button>
      </Link>}
    </div>
  );
};

export default Toppings;
