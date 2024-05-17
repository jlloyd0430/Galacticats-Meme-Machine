import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import NumberJson from "./number.json";

function App() {
  const [number, setNumber] = useState(0);
  const [category, setCategory] = useState("gm");
  const [resultNumber, setResultNumber] = useState(0);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  useEffect(() => {
    setResultNumber(NumberJson[number % NumberJson.length]);
  }, [number]);

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(e.target.value)); // Ensure value is parsed as integer
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleDownload = () => {
    const imageUrl = `https://galacticatsmeme.s3.us-east-2.amazonaws.com/${category}/${resultNumber}.png`;
    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = "galacticats_meme.png";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className="title">Galactic Memes</h1>
      <div className="settings">
        <input
          type="number"
          className="number-select"
          value={number}
          onChange={handleChangeNumber}
        />
        <select
          name="category"
          className="category-select"
          value={category}
          onChange={handleChangeCategory}
        >
          <option value="gm">GM</option>
          <option value="gun">Fud Gun</option>
          <option value="nova">Nova</option>
        </select>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"} {/* Toggle button text */}
        </button>
      </div>
      <div>
        <img
          src={`https://galacticatsmeme.s3.us-east-2.amazonaws.com/${category}/${resultNumber}.png`}
          alt="Galacticats Meme"
          className="image-container"
          style={{
            border: "10px solid orange",
            margin: "auto",
            display: "block",
            borderRadius: "12px",
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={handleDownload}
          className="button"
          style={{
            border: "20px",
            padding: "10px",
            margin: "10px",
            display: "inline-block",
            borderRadius: "12px",
          }}
        >
          Download
        </button>
      </div>
      <div>created by cats for cats</div>
    </div>
  );
}

export default App;
