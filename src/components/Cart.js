import { useSelector,useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice"
const Cart=(items)=>{
    const cartItems= useSelector(store=>store.cart.items)
    const dispatch= useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
return(
    <div>
        <button onClick={()=>handleClearCart()}> Clear Cart</button>
        No of items: {cartItems.length}
        {cartItems.map((item)=><li> {item}</li>)}
    </div>
   
)
}
export default Cart