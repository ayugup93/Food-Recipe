import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";


function App() {



  const [search, setSearch] = useState("chicken");

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //console.log(res);
    setRecipes(res.data.hits);
    //console.log("app init...");
  }

  const APP_ID = "63434e1e";
  const APP_KEY = "619ecba77d020a613ca1d8856efd2d31";

  const onInputChange = (e) => {
    setSearch(e.target.value);
    //console.log(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();

  }

  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;