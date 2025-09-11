import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
	// create an env var with the name VITE_GEMINI_API_KEY and add your API key there
	apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

async function getRecipe(ingredients: string[]): Promise<string | void> {
	console.log("ingredients from getRecipe", ingredients);
	const response = await ai.models.generateContent({
		model: "gemini-2.5-flash",
		contents: `
    I have these ingredients:
    ${ingredients}
    and i want you to give me a recipe using them. Please provide the recipe in a clear and concise format. 
    If you cannot create a recipe with these ingredients, please respond with "No recipe found".
    `,
		config: {
			thinkingConfig: {
				thinkingBudget: 0, // Disables thinking
			},
		},
	});

	if (!response.text) {
		console.error("No response recieved");
		return;
	}

	return response.text;
}

export default getRecipe;
