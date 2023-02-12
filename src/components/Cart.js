import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.warn("store", cartItems)

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <p className="font-bold text-3xl">Cart Items - {cartItems?.length}</p>
            <button className="bg-green-100 p-2 m-4" onClick={() => handleClearCart()}>Clear Cart</button>
            <div className="flex">
                {cartItems.map((item) => (
                    <FoodItem {...item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Cart;