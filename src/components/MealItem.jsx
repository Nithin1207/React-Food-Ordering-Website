import { useContext } from "react"
import Button from "./UI/Button"
import { CartContex } from "./store/CartContex"

export default function MealItem({ meal }) {
    const cartCtx = useContext(CartContex)


    function handleAddMealToCart() {
        cartCtx.addItem(meal)

    }

    return (
        <>
            <li className="meal-item" key={meal.id}>
                <article>
                    <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                    <div>
                        <h3>{meal.name}</h3>
                        <p className="meal-item-price">${meal.price}</p>
                        <p className="mela-item-description">{meal.description}</p>
                    </div>
                    <p className="meal-item-actions">
                        <Button onClick={handleAddMealToCart}>Add to Carts</Button>
                    </p>
                </article>

            </li>
        </>
    )
}