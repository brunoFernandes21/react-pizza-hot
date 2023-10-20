import { Route, Routes } from "react-router-dom";
import Base from "./components/Base";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Toppings from "./components/Toppings";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>  
        <Route path="/base" element={<Base />}/>
        <Route path="/toppings" element={<Toppings />}/>
        <Route path="/order" element={<Order />}/>
      </Routes>
    </div>
  );
}

export default App;
