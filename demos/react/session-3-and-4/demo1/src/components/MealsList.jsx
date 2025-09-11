import { useEffect, useState } from "react";
import { Link } from "react-router";

function MealsList() {
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		async function getMeals() {
			const response = await fetch(
				"https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
			);
			const data = await response.json();
			setMeals(data.meals);
		}

		getMeals();
	}, []);

	return (
		<>
			<ul>
				{meals.map((m) => (
					<li key={m.idMeal}>
						<Link className="text-blue-600" to={`/meal/${m.idMeal}`}>
							{m.strMeal}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default MealsList;
