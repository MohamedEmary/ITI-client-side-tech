import { useState } from "react";
import getRecipe from "./utils";
import ReactMarkdown from "react-markdown";

function App() {
	const [ingredients, setIngredients] = useState(["meat", "carrots", "eggs"]);
	const [ingredientInput, setIngredientInput] = useState("");
	const [recipe, setRecipe] = useState("");
	const [loading, setLoading] = useState(false);

	console.log(ingredients);
	return (
		<>
			<form>
				<input
					type="text"
					name="ingredient"
					onChange={(e) => setIngredientInput(e.target.value)}
					placeholder="Egg, Meat, ..etc"
					value={ingredientInput}
				/>
				<button
					onClick={(e) => {
						e.preventDefault();
						setIngredients((prev) => [...prev, ingredientInput]);
						setIngredientInput("");
					}}>
					Add Ingredient
				</button>
				<br />
				{ingredients.length >= 3 && (
					<button
						onClick={async (e) => {
							e.preventDefault();
							setLoading(true);
							const res = await getRecipe(ingredients);
							setLoading(false);
							setRecipe(res);
						}}>
						Get Recipe
					</button>
				)}
			</form>

			{loading ? (
				"Loading"
			) : (
				<>
					<p>
						<ReactMarkdown>{recipe}</ReactMarkdown>
					</p>
					<br />
					<br />
					<br />
					<br />
					<p>{recipe}</p>
				</>
			)}
		</>
	);
}

export default App;
