import { useContext } from "react";
import companyLogo from "../assets/logo.jpg";
import { CartContex } from "./store/CartContex";
import { UserProgressContext } from "/Users/nithinkumarputti/Downloads/01-starting-project/src/components/store/userProgressContext.jsx";
import Button from "./UI/Button";

const Header = ({ title }) => {
    const cartCtx = useContext(CartContex);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = (cartCtx.items || []).reduce(
        (totalQuantity, item) => totalQuantity + item.quantity,
        0
    );

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={companyLogo} alt="Logo" />
                <h1>{title}</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>
                    Cart ({cartTotal})
                </Button>
            </nav>
        </header>
    );
};

export default Header;
