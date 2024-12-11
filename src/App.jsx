import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./components/store/CartContex";
import { UserProgressContextProvider } from "./components/store/userProgressContext";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header title="NITHIN'S CLOUD KITCHEN" />
          <Meals />

        </CartContextProvider>
        <Cart />
      </UserProgressContextProvider>
    </>
  );
}

export default App;
