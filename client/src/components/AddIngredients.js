import  { useState } from "react";


export default function AddIngriendents({editKlicked,handleOneIngredientChange,handleRemoveIngredient,tempIngredient,addIngredient,handleingredientsChange,addRecipeData}) {

    

    return (
        <>
        {editKlicked ? ( 
                <>
                    <h2>Ingredients</h2>
                    <div className="small-inputs">
                        <div className="form-labelAndInput-small">
                            <label className="Add-Recipe-label">Ingredient:</label>
                            <input 
                                className="Add-Recipe-input-time"
                                type="Text"
                                name="ingredient"
                                placeholder="meat..."
                                
                                value={tempIngredient.ingredient}
                                onChange={handleingredientsChange}
                            />
                        </div>
                        <div className="form-labelAndInput-small">
                            <label className="Add-Recipe-label">Quantity:</label>
                            <input 
                                className="Add-Recipe-input-time"
                                type="Text"
                                name="quantity"
                                placeholder="1/2Kg..."
                                
                                value={tempIngredient.quantity}
                                onChange={handleingredientsChange}
                            />
                            <span onClick={addIngredient} className="ingredient-add">Add</span>
    
                        </div>
                    </div>
                    <br/>
                    <hr/>
            {addRecipeData.ingredients && addRecipeData.ingredients.map((item,idx)=> {
                return (
    
        <div key={idx} className="small-inputs">
            <div className="form-labelAndInput-small">
                <label className="Add-Recipe-label">Ingredient:</label>
                <input
                    className="Add-Recipe-input-time"
                    type="Text"
                    name="ingredient"
                    placeholder="edit ingredient..."
                    required
                    value={item.ingredient}
                    onChange={(e) => handleOneIngredientChange(e, idx, "ingredient")}
                    />
            </div>
            <div className="form-labelAndInput-small">
                <label className="Add-Recipe-label">Quantity:</label>
                <input 
                    className="Add-Recipe-input-time"
                    type="Text"
                    name="quantity"
                    placeholder="edit quantity..."
                    required
                    value={item.quantity}
                    onChange={(e) => handleOneIngredientChange(e, idx, "quantity")}
                    />
                {/* <span className="ingredient-add">Add</span> */}
                {/* <span className="ingredient-add">Edit</span> */}
                <span onClick={() => handleRemoveIngredient(idx)} className="ingredient-add">Delete</span>
            </div>
        </div>
        )})}
    </>
        ):(
    <>
        <h2>Ingredients</h2>
                <div className="small-inputs">
                    <div className="form-labelAndInput-small">
                        <label className="Add-Recipe-label">Ingredient:</label>
                        <input 
                            className="Add-Recipe-input-time"
                            type="Text"
                            name="ingredient"
                            placeholder="meat..."
                            
                            value={tempIngredient.ingredient}
                            onChange={handleingredientsChange}
                        />
                    </div>
                    <div className="form-labelAndInput-small">
                        <label className="Add-Recipe-label">Quantity:</label>
                        <input 
                            className="Add-Recipe-input-time"
                            type="Text"
                            name="quantity"
                            placeholder="1/2Kg..."
                            
                            value={tempIngredient.quantity}
                            onChange={handleingredientsChange}
                        />
                        <span onClick={addIngredient} className="ingredient-add">Add</span>

                    </div>
                </div>
                <br/>
                <hr/>
        {addRecipeData.ingredients && addRecipeData.ingredients.map((item,idx)=> {
            return (

    <div key={idx} className="small-inputs">
        <div className="form-labelAndInput-small">
            <label className="Add-Recipe-label">Ingredient:</label>
            <input
                className="Add-Recipe-input-time"
                type="Text"
                name="ingredient"
                placeholder="edit ingredient..."
                required
                value={item.ingredient}
                onChange={(e) => handleOneIngredientChange(e, idx, "ingredient")}
                />
        </div>
        <div className="form-labelAndInput-small">
            <label className="Add-Recipe-label">Quantity:</label>
            <input 
                className="Add-Recipe-input-time"
                type="Text"
                name="quantity"
                placeholder="edit quantity..."
                required
                value={item.quantity}
                onChange={(e) => handleOneIngredientChange(e, idx, "quantity")}
                />
            {/* <span className="ingredient-add">Add</span> */}
            {/* <span className="ingredient-add">Edit</span> */}
            <span onClick={() => handleRemoveIngredient(idx)} className="ingredient-add">Delete</span>
        </div>
    </div>
    )})}
    </>
    )}
    </>
    )
}