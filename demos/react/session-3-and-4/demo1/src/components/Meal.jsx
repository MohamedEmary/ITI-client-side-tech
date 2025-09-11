import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function Meal() {
	// url params
	const { mealId } = useParams();
	const [mealData, setMealData] = useState({});

	useEffect(() => {
		async function getMealDetails() {
			const response = await fetch(
				`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
			);
			const data = await response.json();
			setMealData(data.meals[0]);
			console.log(data.meals[0]);
		}

		getMealDetails();
	}, [mealId]);

	return (
		<div className="container mx-auto">
			<h1>This is the Meal page for <span className="font-bold">{mealData.strMeal}</span> </h1>
			<img
				src={mealData.strMealThumb}
				alt={mealData.strMeal}
				style={{ width: "400px" }}
			/>
			<p>
				<Link className="text-blue-600" to="/">
					Return Home
				</Link>
			</p>
		</div>
	);
}

export default Meal;
