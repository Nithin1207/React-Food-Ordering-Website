import { createContext, useReducer } from "react";

// Initialize CartContex with a default value
export const CartContex = createContext({
    items: [],
    addItem: () => { },
    removeItem: () => { },
});

// Reducer function for handling cart actions
function CartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const updatedItem = {
                ...state.items[existingCartItemIndex],
                quantity: state.items[existingCartItemIndex].quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === "REMOVE_ITEM") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const updatedItems = [...state.items];

        if (state.items[existingCartItemIndex].quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...state.items[existingCartItemIndex],
                quantity: state.items[existingCartItemIndex].quantity - 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems };
    }

    return state;
}

// Context provider component
export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: "ADD_ITEM", item });
    }

    function removeItem(id) {
        dispatchCartAction({ type: "REMOVE_ITEM", id });
    }

    const cartContextValue = {
        items: cart.items,
        addItem,
        removeItem,
    };

    return (
        <CartContex.Provider value={cartContextValue}>
            {children}
        </CartContex.Provider>
    );
}
