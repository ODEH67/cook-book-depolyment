import { useState } from "react";
import axios from "axios";


export default function EditRecipe({ recipe }) {
    const [title, setTitle] = useState(recipe.title);
    const [category, setCategory] = useState(recipe.category);
  // Add more state variables for other fields you want to edit

    const handleSave = async () => {
    const updatedRecipe = {
        _id: recipe._id,
        title,
        category,
      // Include other fields here
    };


    try {
      // Make a PUT request to update the recipe
        const response = await axios.put(`/recipes/edit`, updatedRecipe);
        console.log("🚀 ~ response:", response);
    // Handle success, e.g., show a success message or redirect
    } catch (error) {
        console.log("🚀 ~ error:", error);
      // Handle error, e.g., show an error message
    }
    };


    return (
    <div>
        <h3>Edit Recipe</h3>
        <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
      {/* Add more fields for other properties */}
        <button onClick={handleSave}>UPDATE</button>
    </div>
    );
}
