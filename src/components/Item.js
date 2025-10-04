import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: State for cart status
  const [isInCart, setIsInCart] = useState(false);

  // Step 2: Handler for toggling
  function handleAddToCartClick() {
    setIsInCart(!isInCart);
  }

  // Step 3: Apply conditional class and text
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleAddToCartClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
