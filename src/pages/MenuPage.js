import Header from "../components/Header";
import FoodList from "../components/FoodList";
import Basket from "../components/Basket";
import {useEffect, useState} from "react";
import {makeRequest} from "../utils/requests";
import {useFetchRestaurantOpenedQuery} from "../store";

function MenuPage() {
    const { data: restaurantOpened } = useFetchRestaurantOpenedQuery()
    const [food, setFood] = useState([]);
    const opened = restaurantOpened && restaurantOpened.data.opened

    useEffect(() => {
        async function fetchFood() {
            const response = await makeRequest("/food/")
            const foodWithCount = await response.data.map((food) => {
                if (!food.count) food.count = 0;
                return food
            })

            setFood(foodWithCount)
        }
        fetchFood()
    }, [])

    let classifiedFood = {}
    food.forEach((food) => {
        if (classifiedFood.hasOwnProperty(food.category)) {
            classifiedFood[food.category].push(food)
        } else {
            classifiedFood[food.category] = [food]
        }
    })

    const handleCountChange = (event) => {
        const id = parseInt(event.target.dataset.id)
        const value = parseInt(event.target.value) || 0
        if (value < 0 || value > 99) return

        const changedFood = food.map((food) => {
            if (food.id === id) {
                return { ...food, count: value }
            }
            return food
        })
        setFood(changedFood)
    }

    const foodCountReset = () => {
        const changedFood = food.map((food) => {
            return { ...food, count: 0 }
        })
        setFood(changedFood)
    }

    const closedContent =
        <>
            <h3>RESTAURACE NENÍ OTEVŘENÁ</h3>
            <p>NELZE PROVÁDĚT OBJEDNÁVKY</p>
        </>

    const renderedFoodList = Object.keys(classifiedFood).map((foodCategory) => {
        return <FoodList key={foodCategory} category={foodCategory} food={classifiedFood[foodCategory]} onChange={handleCountChange} />
    })

    return (
        <>
            <Header title="MENU" backgroundImgPath="pizza1"></Header>
            <main className="menu">
                { opened ? <Basket food={food} foodCountReset={foodCountReset}/> : closedContent }
                { renderedFoodList }
            </main>
        </>
    )
}

export default MenuPage;