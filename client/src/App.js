import logo from './logo.svg';
import './App.css';
import {Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Recipe from "./components/recipePage";
import AddingRecipe from "./components/addingRecipe";
import Editrecipe from "./components/editResipe";

import {useState,useEffect} from "react";
import MongooseFetch from "./components/MongooseFetch"
import SyncLoader from "react-spinners/ClockLoader";
import axios from "axios";


function App() {

  const [loading,setLoading] = useState(true);
  const [recipes,setRecipes] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [user, setUser] = useState("6494f67d5f2bc0eec97b9adf")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { FetchRecipes } = MongooseFetch();
        const finalRecipe = await FetchRecipes();
        setRecipes(finalRecipe);
        setLoading(false);
        setIsAdded(false);
        console.log("finalRecipe App", finalRecipe);
      } catch (error) {
        console.log("Error from FetchRecipes", error);
      }
    };

    fetchData();
  }, [setRecipes,isDeleted,isAdded]);

  console.log("isDeleted from app", isDeleted);
  console.log("isAdded from app", isAdded);
  
  return (
    <>
        {loading ? (
        <SyncLoader
            color="red"
            cssOverride={{ margin: "40vh auto" }}
            loading
            size={90}
        />
    ) : (
  <div className="App">
        <div className='main-div'>
          <Routes>
            <Route  path="/" element={<MainPage setIsDeleted={setIsDeleted} loading ={loading} recipes ={recipes} />} />
            <Route  path="/add" element={<AddingRecipe user={user} setIsAdded={setIsAdded} loading ={loading} recipes ={recipes} />} />
            <Route  path="/recipe/:postId" element={<Recipe setIsDeleted={setIsDeleted} loading ={loading} setLoading ={setLoading} recipes ={recipes} />} />
            <Route  path="/edit/:postId" element={<Editrecipe user={user} editClicked={editClicked} setEditClicked={setEditClicked} setIsAdded={setIsAdded} loading ={loading} setLoading ={setLoading} recipes ={recipes} />} />
            <Route  path="*"
            element={
                  <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  height: "50vh" }}>
                    <h1 className="not-found">Error 404 page Not Found</h1>
                  </div>
                  }/>
          </Routes>
        </div>
        <Footer/>
    </div>)}
    </>
  );
}

export default App;