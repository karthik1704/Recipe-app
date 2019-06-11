import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_Id = "59d73805";
  const API_KEY = "5351807f63b15aad9634e98cdad96080";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_Id}&app_key=${API_KEY}`
      );

      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };

    getRecipes();
  }, [query]);

  const updateSearch = e => {
    const search = e.target.value;
    setSearch(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          onChange={updateSearch}
          type="text"
          value={search}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          image={recipe.recipe.image}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
        />
      ))}
    </div>
  );
}

export default App;
