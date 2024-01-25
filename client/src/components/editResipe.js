import AddingHeader from "./addingHeader"
import Ingredients from "./AddIngredients"
import AddImage from "./AddImage"
import  {useEffect, useState } from "react";
import { NavLink,useParams } from "react-router-dom";
import axios from "axios";
import noimage from "../img/uploadimg.jpg";
import { FaWindowClose } from 'react-icons/fa'



export default function AddRecipePage({user,setIsAdded,setLoading,recipes,loading}) {

    const page = useParams();
    // console.log("edit one recipe page",page.postId)



        useEffect(() => {
// plus sign (+) is to convert a string to a Number
        const ClickedRecipe = recipes.find((Item) => Item._id === page.postId);
        setAddRecipeData(ClickedRecipe);
        setLoading(false)

        
        }, [recipes]);

    const [tempIngredient, settempIngredient] = useState({})

    const [image, setImage] = useState({
        url: noimage,
        file: null,
        });

    const [addRecipeData, setAddRecipeData] = useState({

        },
    );

    // console.log("editRecipe () addRecipeData",addRecipeData)

    const [isRecipeAdded, setIsRecipeAdded] = useState(false);
    const [requierd, setRequierd] = useState(false);

    // console.log("ingredientss in edit recipe",ingredientss);
    // console.log("tempIngredient in edit recipe",tempIngredient);
    // console.log("addRecipeData in edit recipe",addRecipeData);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddRecipeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleingredientsChange = (e) => {
        const { name, value } = e.target;
        settempIngredient((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleOneIngredientChange = (e, index, property) => {
        const { value } = e.target;
        setAddRecipeData((prevData) => {
        const updatedIngredients = [...prevData.ingredients];
        updatedIngredients[index][property] = value;
        return {
            ...prevData,
            ingredients: updatedIngredients,
        };
        });
    };


    const addIngredient = () => {
        if (tempIngredient.ingredient && tempIngredient.quantity) {
        setAddRecipeData((prevData) => ({
            ...prevData,
            ingredients: [...prevData.ingredients, tempIngredient],
        }));
        settempIngredient({ ingredient: "", quantity: "" });
    }
};


    // const addIngredient = () => {
    //     setIngredients((prevData) => [
    //     ...prevData,
    //     { ingredient: "", quantity: "" },
    //     ]);
    // };

    const handleRemoveIngredient = (index) => {
        setAddRecipeData((prevData) => {
        const updatedIngredients = prevData.ingredients.filter(
            (_, i) => i !== index
        );
        return {
            ...prevData,
            ingredients: updatedIngredients,
        };
        });
    };


    const dismissPopup = () => {
        setIsRecipeAdded(false);
        setRequierd(false)
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!addRecipeData.category || addRecipeData.category === "Select" || addRecipeData.ingredients.length === 0 ) {
            setRequierd(true)
        } else 
        
        try {
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //         const formdata = new FormData();
        
        // formdata.set("id", user);
        // formdata.set("image", image.file, "filename");
        
        // for (let pair of formdata.entries()) {
        //     console.log(pair[0] + ": " + pair[1]);
        // }
            await axios.put(process.env.REACT_APP_ADD_RECIPE_API+"/recipes/edit", addRecipeData);


        // const response = await axios.put("/recipes/image", formdata, {
        //     Headers: {
        //     "Content-type": "multipart/form-data; charset=UTF-8",
        //     },
        // });
        // console.log(response img edit page:", response);
                // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            console.log("Recipe added successfully!");
        
            setIsRecipeAdded(true)


        } catch (error) {
            console.error("Error adding recipe:", error);
        }
    };

    
return (
    <>
    <AddingHeader />
    <div className="Add-Recipe-container">
        <form onSubmit={handleSubmit} className="Add-Recipe-form">

            <div className="form-labelAndInput-container">
                <label className="Add-Recipe-label">Recipe Name:</label>
                <input 
                    className="Add-Recipe-input"
                    type="text"
                    name="title"
                    placeholder="Beef Burger..."
                    required
                    value={addRecipeData.title}
                    onChange={handleInputChange}
                />
            </div>
            {/* <div className="form-labelAndInput-container">
                <label className="Add-Recipe-label">Add Image:
                <input 
                    className="Add-Recipe-des"
                    type="file"
                    name="image"
                    required
                    style={{display: "hidden"}}
                />
                </label>
            </div> */}
            <AddImage  setImage={setImage} user={user} image={image}/>
            <div className="form-labelAndInput-container">
                <label className="Add-Recipe-label">Description:</label>
                <textarea 
                    className="Add-Recipe-des"
                    type="Text"
                    name="description"
                    placeholder="without meat, life is meaningless..."
                    value={addRecipeData.description}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="small-inputs">

                <label className="Add-Recipe-label">category:</label>
                <select 
                    className="Add-Recipe-select"
                    name="category"
                    value={addRecipeData.category}
                    onChange={handleInputChange}
                >
                    <option value="Select" >Select..</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Sweets">Sweets</option>
                </select>

            <div className="form-labelAndInput-small">
                <label className="Add-Recipe-label">preporation time: (in minutes)</label>
                <input 
                    className="Add-Recipe-input-time"
                    type="number"
                    min="0"
                    max="500"
                    name="preporation_time"
                    placeholder="30 .."
                    required
                    value={addRecipeData.preporation_time}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-labelAndInput-small">
                <label className="Add-Recipe-label">Servings:</label>
                <input 
                    className="Add-Recipe-input-time"
                    type="number"
                    min="0"
                    max="99"
                    name="serving"
                    placeholder="2 .."
                    required
                    value={addRecipeData.serving}
                    onChange={handleInputChange}
                />
            </div>
            </div>
            <br/>

            <br/>
            <div className="small-inputs-container">
                
                <Ingredients handleOneIngredientChange={handleOneIngredientChange} handleRemoveIngredient={handleRemoveIngredient} addRecipeData={addRecipeData} tempIngredient={tempIngredient} addIngredient={addIngredient} handleingredientsChange={handleingredientsChange} />
            </div>
            <hr/>
            <button className="ingredient-add" onClick={()=>setIsAdded(true)}>Update Recipe</button>
        </form>
        {isRecipeAdded && (
        <div className="success-overlay">
            <div className="success-message">
            <span onClick={dismissPopup} className="close-button"><FaWindowClose/></span>
            <h2>Recipe updated successfully!</h2>
            </div>
        </div>
        )}
                {requierd && (
        <div className="success-overlay">
            <div className="success-message">
            <span onClick={dismissPopup} className="close-button"><FaWindowClose/></span>
            <h2>Fill the required fields</h2>
            </div>
        </div>
        )}
    </div>
    
    </>
)
}