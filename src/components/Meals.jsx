import { useEffect, useState } from "react";
import MealItem from "./MealItem";

function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await fetch("http://localhost:3000/meals");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const meals = await response.json();
                setLoadedMeals(meals);
            } catch (error) {
                console.error("Failed to fetch meals:", error);
            }
        }
        fetchMeals();
    }, []);

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem meal={meal} key={meal.id} />
            ))}
        </ul>
    );
}

export default Meals;
