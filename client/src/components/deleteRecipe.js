import { FaWindowClose } from 'react-icons/fa'
import axios from "axios";


export default function deleteRecipe({item,setIsDeleted, user}) {

const handleDelete = async () => {
    setIsDeleted(true);
    try {
    await axios.delete(process.env.REACT_APP_ADD_RECIPE_API+`/recipes/delete/${item._id}`);
    console.log("Recipe deleted successfully!");

    setIsDeleted(false);

} catch (error) {
    console.error("Error adding recipe:", error);
}
};

console.log("delete button item._owner 🚒🚑🚗🛻:", item.owner._id)
console.log("delete button user 🚒🚑🚗🛻:", user)

return (<>
{item.owner._id == user && (
<span className="del-edit-span" onClick={handleDelete}><FaWindowClose/></span>)
}
</>)
}
