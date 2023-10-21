import { useGlobalContext } from "../context/context";

const Order = () => {
  const { pizza } = useGlobalContext();
  console.log(pizza)
  return (
    <div className="container order">
      <h2 className="font-bold">Thank you for your order :)</h2>
      <p className="my-[20px] mx-[auto]">You ordered a <strong>{pizza.base}</strong> pizza with:</p>
      {pizza.toppings.map((topping) => <div key={topping}>{topping}</div>)}
    </div>
  )
}

export default Order