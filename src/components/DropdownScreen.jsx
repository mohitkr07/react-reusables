import React, { useState } from "react";
import styles from "./Components.module.css";
import Dropdown from "./dropdown/Dropdown";

const DropdownScreen = (props) => {
  const [bgColor, setBgColor] = useState("white");
  return (
    <div
      style={{ backgroundColor: bgColor, transition: ".5s ease" }}
      className={styles["dropdown-container"]}
    >
      <Dropdown onSelect={(color) => setBgColor(color)} />
    </div>
  );
};

DropdownScreen.propTypes = {};

export default DropdownScreen;
