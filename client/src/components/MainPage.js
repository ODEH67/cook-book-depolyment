import SyncLoader from "react-spinners/ClockLoader";
import { NavLink } from "react-router-dom";
import '../CSS-files/cook-book-HomePage-&-ingredients.css';
import Header from "./Header";
import TimeCorrection from "./timeCorrection";
import DeleteRecipe from "./deleteRecipe";
import {useState,useEffect} from "react";

import { FaEdit } from 'react-icons/fa'


export default function FilteredRecipes({user, recipes,loading,setIsDeleted}) {

    const [FilteredRecipes,setFilteredRecipes] = useState(recipes);
    const [selectedCategory,setSelectedCategory] = useState("All");


        useEffect(() => {

            if (selectedCategory === "All") {
            setFilteredRecipes(recipes);
            } else {
            const filtered = recipes.filter((item) => item.category === selectedCategory);
            setFilteredRecipes(filtered);
            }

        }, [recipes,selectedCategory]);


    // console.log("loading main",loading)
    // console.log("finalRecipe main",recipes)


    return (
<>

    {!recipes || Object.keys(recipes).length === 0 || loading ? (
        <SyncLoader
            color="white"
            cssOverride={{ margin: "40vh auto" }}
            loading
            size={90}
        />
    ) : (
        <>
        <Header setSelectedCategory ={setSelectedCategory} />
<span id="recipes-today"></span>
    <main className="catalogue">
    {FilteredRecipes.map((item, idx) => {
        return (
        <div className="catalogue-item" key={item._id} >
            <div className="times-container">

            {item.owner._id == user && (
            <NavLink to={`/edit/${item._id}`}>
            <span className="del-edit-span"><FaEdit/></span>
            </NavLink>
            )}

            <DeleteRecipe user={user} setIsDeleted={setIsDeleted} item={item}/>
            </div>
            <NavLink to={`/recipe/${item._id}`}>
                <img className="food" src={item.image} alt="logo"/>
                <div className="catalogue-item-info">
                <div className="times-container">
                    <p className="food-type">{item.category}</p>
                    <p className="time">{item.preporation_time} min</p>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="add-time"><TimeCorrection recipe_ID={item._id}/></p>
                    
                </div>
            </NavLink>
        </div>
    )})}
    </main>
        </>
        )}
        </>
        )
        }