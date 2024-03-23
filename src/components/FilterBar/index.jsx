import React from "react";
import style from "./FilterBar.module.css";

const FilterBar = ({ categories, selectedCategory, onFilter }) => {
  const handleCategoryChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div className={style.filterBarContainer}>
      <label className={style.label}>Product Categories: </label>
      <select
        className={style.selectFilter}
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
