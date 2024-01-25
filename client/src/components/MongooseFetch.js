


export default function MongooseFetch() { 


    const FetchRecipes = async () => {
        
        try {
            const response = await fetch(process.env.REACT_APP_ADD_RECIPE_API+"/Recipes/list");
            if (!response.ok) {
                throw new Error(`Request failed, status: ${response.status}`);
            }
            const data = await response.json();
            
            console.log("data from MongooseFetch",data);
            return data
        } catch (error) {
            console.log("error from MongooseFetch",error);
            throw error;
            }
        };


    return {FetchRecipes}
}