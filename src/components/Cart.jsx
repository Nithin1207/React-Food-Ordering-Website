import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContex } from "./store/CartContex";
import { UserProgressContext } from "/Users/nithinkumarputti/Downloads/01-starting-project/src/components/store/userProgressContext.jsx";
import Button from "./UI/Button";

export default function Cart() {
    const cartCtx = useContext(CartContex);
    const userProgressCtx = useContext(UserProgressContext);

    // Safely reduce cart items
    const cartTotal = (cartCtx.items || []).reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    return (
        <>
            <Modal className="cart" open={userProgressCtx.progress === "cart"}>
                <h2>Your Cart</h2>
                <ul>
                    {cartCtx.items.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.quantity}
                        </li>
                    ))}
                </ul>
                <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
                <p className="modal-actions">
                    <Button textOnly onClick={userProgressCtx.hideCart}>
                        Close
                    </Button>
                    <Button onClick={userProgressCtx.showCheckout}>
                        Go to Checkout
                    </Button>
                </p>
            </Modal>
        </>
    );
}
