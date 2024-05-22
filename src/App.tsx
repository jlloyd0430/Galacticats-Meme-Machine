import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(1);
  const [category, setCategory] = useState("gm");
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(e.target.value)); // Ensure value is parsed as integer
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleDownload = () => {
    const imageUrl = `https://galacticatsmeme.s3.us-east-2.amazonaws.com/${category}/${number}.png`;
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
      <h1 className="title">GC Customs</h1>
      <div>press and hold the image to save or click download</div>
        <div>Note: all Zombie/tatto furs will be updated shortly</div>
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
          <option value="gun">Fud Rifle</option>
          <option value="nova">Nova</option>
        </select>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"} {/* Toggle button text */}
        </button>
      </div>
      <div>
        <img
          src={`https://galacticatsmeme.s3.us-east-2.amazonaws.com/${category}/${number}.png`}
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
            marginTop: "25px",
            display: "inline-block",
            borderRadius: "12px",
          }}
        >
          Download
        </button>
      </div>
      <div className="creators" >created by cats for cats</div>
       <div className="footer">
        <a href="https://x.com/GalacticatsNFT" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.jpg.store/collection/galacticats?tab=items" target="_blank" rel="noopener noreferrer"><i className="fas fa-image"></i></a>
        <a href="https://discord.gg/qKjymp53DB" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
        <a href="https://galacticats.xyz" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>
      </div>
    </div>
  );
}

export default App;
