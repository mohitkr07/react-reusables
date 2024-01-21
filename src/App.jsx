import { useState } from "react";
import "./App.css";
import Dropdown from "./components/dropdown/Dropdown";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="container">
        <Dropdown onSelect={(color) => setBgColor(color)} />
      </div>
    </>
  );
}

export default App;
