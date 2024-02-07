import {useState,useEffect} from "react";
import SyncLoader from "react-spinners/ClockLoader";
import { NavLink,useParams } from "react-router-dom";
import GradientHeader from "./IngredientsHeader";
import TimeCorrection from "./timeCorrection";
import { FaEdit } from 'react-icons/fa'
import "../CSS-files/cook-book-HomePage-&-ingredients.css"
import DeleteRecipe from "./deleteRecipe";



export default function Recipe({user, setIsDeleted,setLoading,recipes,loading}) {

    // console.log("loading ingredient",loading)
    // console.log("finalRecipe ingredient",recipes)

    const [recipe,setRecipe] = useState({});
    const page = useParams();
    console.log("one recipe page",page.postId)
    // console.log("ingredient recipe",recipe)


        useEffect(() => {
// plus sign (+) is to convert a string to a Number
        const ClickedRecipe = recipes.find((Item) => Item._id === page.postId);
        setRecipe(ClickedRecipe);
        setLoading(false)
        // console.log("ClickedRecipe",ClickedRecipe)
        
        }, [recipes]);


    return (
<>
    {!recipe || Object.keys(recipe).length === 0 || loading ? (
        <SyncLoader
            color="red"
            cssOverride={{ margin: "40vh auto" }}
            loading
            size={90}
        />
    ) : (
        <>
<GradientHeader recipe={recipe} />
<main className="recipe">
    <div className="edit-del-recipe-page">

        {recipe.owner._id == user && (
        <NavLink to={`/edit/${recipe._id}`}>
            <span className="del-edit-span"><FaEdit/></span>
        </NavLink>
        )}

        <NavLink to={`/`}>
        <DeleteRecipe user={user} setIsDeleted={setIsDeleted} item={recipe}/>
        </NavLink>
    </div>
        <img className="recipe-image" src={recipe.image} alt=""/>
            <div className="times-container">
        <div className="timing">
                <div className="prep-time">
                    <p className="timing-bold">PREP TIME</p>
                    <p>{recipe.preporation_time} min</p>
                </div>
                <div>
                    <p className="timing-bold">SERVINGS</p>
                    <p>{recipe.serving} servings</p>
                </div>
            </div>
                <div>
                <p className="timing-bold">CREATED</p>
                <p className="time"><TimeCorrection recipe_ID={recipe._id}/></p>
                </div>
        </div>
        <hr />
        <h2>Ingredients</h2>
        <table>
        <tbody>
            <tr>
                <th>Ingredients</th>
                <th>Quantities</th>
            </tr>
            {recipe.ingredients.map((item, idx) => {
        return (
            <tr key={idx}>
                <td stayle={{wordBreak: 'break-word'}}>{item.ingredient}</td>
                <td>{item.quantity}</td>
            </tr>
            )})}
        </tbody>
        </table>
    </main>
    </>
        )}
        </>
        )
        }