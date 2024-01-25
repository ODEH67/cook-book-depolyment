import { FaWindowClose } from 'react-icons/fa'
import axios from "axios";


export default function deleteRecipe({recipeID,setIsDeleted}) {

const handleDelete = async () => {
    setIsDeleted(true);
    try {
    await axios.delete(process.env.REACT_APP_ADD_RECIPE_API+`/recipes/delete/${recipeID}`);
    console.log("Recipe deleted successfully!");

    setIsDeleted(false);

} catch (error) {
    console.error("Error adding recipe:", error);
}
};

return <span className="del-edit-span" onClick={handleDelete}><FaWindowClose/></span>
}
