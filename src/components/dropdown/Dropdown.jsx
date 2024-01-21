import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ onSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleDropdown = (color) => {
    onSelect(color);
    setSelected(color);
    setShowDropdown(false);
  };

  const colors = ["white", "gold", "gray", "pink", "orange"];

  return (
    <div className={styles.container}>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={styles.dropdown}
      >
        <p>{selected || "white"}</p>
        <i className="fa-solid fa-angle-down" />
      </div>

      {showDropdown && (
        <div className={styles.list}>
          {colors.map((item, ind) => (
            <p onClick={() => handleDropdown(item)}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
