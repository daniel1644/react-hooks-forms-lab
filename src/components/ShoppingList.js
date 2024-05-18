import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(searchValue) {
    setSearchText(searchValue);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchText === "") return true;
  
    if (selectedCategory !== "All") {
      return item.category === selectedCategory;
    }
  
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
      searchText={searchText}
      onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
