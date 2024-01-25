import Recipe from "../model/Recipe.js";

export const handleListRecipes = async (req, res) => {
  try {
    const Recipes = await Recipe.find()
    .select("-__v")
    .populate({ path: "owner", select: "-password -__v" });

    console.log("🚀 ~ Recipes:", Recipes);
    res.send(Recipes);
  } catch (error) {
    console.log("🚀 ~ error LIST Recipe: ", error.message);
    res.send("Error in listing Recipes " + error.message);
  }
};

export const handleAddRecipe = async (req, res) => {
  console.log("🚀 ~ handleAddRecipe:", req.body);

  try {
    const newRecipe = await Recipe.create(req.body);
    console.log("🚀 ~ newRecipe:", newRecipe);

    res.send("Recipe Inserted into db");
  } catch (error) {
    console.log("🚀 ~ error ADDING Recipe:", error.message);

    res.send("Error in adding a Recipe" + error.message);
  }
};

export const handleDeleteRecipe = async (req, res) => {
  console.log("🚀 ~ handleDeleteRecipe:", req.params);

  try {
    const deleteRecipe = await Recipe.findByIdAndDelete(req.params.id);
    console.log("🚀 ~ deleteRecipe:", deleteRecipe);

    res.send("Recipe deleted into db");
  } catch (error) {
    console.log("🚀 ~ error DELETING Recipe:", error.message);

    res.send("Error in deleting a Recipe" + error.message);
  }
};

export const handleEditRecipe = async (req, res) => {
  console.log("🚀 ~ handleEditRecipe:", req.body);

  try {
    const editedRecipe = await Recipe.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    console.log("🚀 ~ editedRecipe:", editedRecipe);

    res.send("Recipe edited");
  } catch (error) {
    console.log("🚀 ~ error EDITING Recipe:", error.message);

    res.send("Error in EDITING a Recipe" + error.message);
  }
};

export const handleUpdateRecipe = async (req, res) => {
  console.log("🚀 ~ handleUpdateRecipe img req.file:", req.file);

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    console.log("🚀 ~ req.file.filename :", req.file.filename);
    // req.body.image = req.file.filename;


    console.log("🚀 ~ updatedRecipe:", updatedRecipe);

    res.send("User Inserted into db");

  } catch (error) {
    console.log("🚀 ~ error EDITING img Recipe:", error.message);

    res.send("Error in img a Recipe" + error.message);
  }
}
