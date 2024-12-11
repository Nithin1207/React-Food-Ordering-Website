import { createContext, useState } from "react";

// Initialize UserProgressContext with default values
export const UserProgressContext = createContext({
    progress: "",
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { },
});

// Context provider for user progress
export function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState("");

    function showCart() {
        setUserProgress("cart");
    }

    function hideCart() {
        setUserProgress("");
    }

    function showCheckout() {
        setUserProgress("checkout");
    }

    function hideCheckout() {
        setUserProgress("");
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    };

    return (
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    );
}
