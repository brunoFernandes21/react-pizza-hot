import { Route, Routes } from "react-router-dom";
import Base from "./components/Base";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Toppings from "./components/Toppings";
import Deals from "./components/Deals";
import Pizza from "./components/Pizza";
import Sides from "./components/Sides";
import Desserts from "./components/Desserts";
import Drinks from "./components/Drinks";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/pizza" element={<Pizza/>}/>
        <Route path="/sides" element={<Sides/>}/>
        <Route path="/desserts" element={<Desserts/>}/>
        <Route path="/drinks" element={<Drinks/>}/>
        <Route path="/deals" element={<Deals/>}/>
        <Route path="/base" element={<Base />}/>
        <Route path="/toppings" element={<Toppings />}/>
        <Route path="/order" element={<Order />}/>
      </Routes>
    </div>
  );
}

export default App;
