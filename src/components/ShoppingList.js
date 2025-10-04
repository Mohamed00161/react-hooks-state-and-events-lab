import React, { useState } from "react";
import Item from "./Item";
import itemData from "../data/items"; // assume this is where your data lives

function ShoppingList() {
  // Step 1: State for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: Event handler for select
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Step 3: Filter items based on selected category
  const itemsToDisplay = itemData.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  // Step 4: Render dropdown and filtered items
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
