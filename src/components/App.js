import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

function App() {
  // Step 1: State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Event handler
  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  // Step 3: Dynamic className
  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList />
    </div>
  );
}

export default App;
