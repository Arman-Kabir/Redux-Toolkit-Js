import CartContainer from "./components/CartContainer";
import { Navbar } from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.Modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])

  return <main>
    {isOpen && <Modal></Modal>}
    <Navbar></Navbar>
    <CartContainer></CartContainer>
  </main>
}
export default App;
