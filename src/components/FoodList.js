import useUserContext from "../hooks/use-user-context";
import Input from "./Input";
import {Link} from "react-router-dom";
import {useFetchRestaurantOpenedQuery} from "../store";

function FoodList({category, food, onChange}) {
    const { user } = useUserContext()
    const { data: restaurantOpened } = useFetchRestaurantOpenedQuery()

    const renderedItems = food.map((food) => {
        const ingredients = food.ingredients.replaceAll(",", ", ")

        let input = null;
        if (restaurantOpened && restaurantOpened.data.opened) {
            if (user.id) {
                input = <Input
                    data-id={food.id}
                    type="number"
                    size={5}
                    max={99}
                    value={food.count || ""}
                    placeholder="0"
                    onChange={onChange}
                />
            } else {
                input = <Link to="/login">OBJEDNAT SI</Link>
            }
        }

        return (
            <li key={food.id}>
                <div className="left">
                    <h3>{food.title}</h3>
                    <p>{ingredients}</p>
                </div>
                <div className="right">
                    <span>{food.price} KČ</span>
                    {input}
                </div>
            </li>
        )
    })

    return (
        <div>
            <h2>{category}</h2>
            <ul className="food-list">
                {renderedItems}
            </ul>
        </div>
    )
}

export default FoodList;
