import { useEffect, useState } from "react";

function Meals() {
	// const [meals, setMeals] = useState([]);
	const [mealDetails, setMealDetails] = useState(undefined);
	const [mealName, setMealName] = useState("Arrabiata");

	const callApi = async () => {
		const result = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
		);
		const res = await result.json();
		setMealDetails(res.meals[0]);
		// console.log(res.meals[0]);
		// setMeals(res.meals);
	};

	const handleChangeName = (formData) => {
		setMealName(formData.get("meal"));
	};

	useEffect(() => {
		callApi();
	}, [mealName]);

	// return <ul>{meals ? meals.map((meal) => <li>{meal.strMeal}</li>) : ""}</ul>;
	// TODO:
	return (
		<>
			<form action={handleChangeName}>
				<input type="text" name="meal" />
				<button>submit</button>
			</form>
			{/* <ul>
				{meals?.map((meal) => (
					<li key={meal?.idMeal}>{meal?.strMeal}</li>
				))}
			</ul> */}
			{mealDetails && (
				<div>
					<h2>Your meal is {mealDetails.strMeal}</h2>
					<p>You meal category is {mealDetails.strCategory}</p>
				</div>
			)}
		</>
	);
}

export default Meals;
