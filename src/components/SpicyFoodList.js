import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    const updatedFood = foods.find((food) => food.id === id);
    updatedFood.heatLevel += 1;
    const newFoodArrays = [...newFoodArray, updatedFood];
    setFoods(newFoodArrays);
  }
  

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      <button onClick={() => handleLiClick(food.id)}>Delete</button>
    </li>
  ));

  const filteredFoods = filterBy === "All" ? foods : foods.filter((food) => food.cuisine === filterBy);

  const filteredFoodList = filteredFoods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      <button onClick={() => handleLiClick(food.id)}>Delete</button>
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange} value={filterBy}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{filteredFoodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
