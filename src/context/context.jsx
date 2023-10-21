import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pizza, setPizza] = useState({
    base: "",
    toppings: [],
  });

  const addBase = (base) => {
    if (pizza.base === base) return;
    setPizza({ ...pizza, base: base });
  };

  const addToppings = (topping) => {
    let newToppings;
    //check if topping is already in the toppings array
    if (pizza.toppings.includes(topping)) {
      //
      newToppings = pizza.toppings.filter((item) => item !== topping);
    } else {
      // if not add it to toppings array
      newToppings = [...pizza.toppings, topping];
    }
    setPizza({ ...pizza, toppings: newToppings });
  };


  return (
    <AppContext.Provider value={{ pizza, addBase, addToppings }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
