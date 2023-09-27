import { useState } from "react";
import ColorSquare from "./components/ColorSquare.tsx";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  return (
    <div style={{ padding: 20 }}>
      <h1>Basic Color Theory</h1>
      <hr />
      <h2>Hue</h2>
      <p>Choose a hue to explore</p>
      <input
        type="color"
        value={selectedColor}
        onInput={(e) => setSelectedColor(e.target.value)}
        style={{
          padding: 0,
          margin: 0,
          width: 100,
          height: 100,
          cursor: "pointer",
          border: "none",
          outline: "none",
        }}
      />

      <h2>Tint</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {[...Array(20)].map((item, index) => {
          return (
            <ColorSquare key={index} color={selectedColor} tint={index * 5} />
          );
        })}
      </div>
      <h2>Shade</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {[...Array(20)].map((item, index) => {
          return (
            <ColorSquare key={index} color={selectedColor} shade={index * 5} />
          );
        })}
      </div>
      <h2>Opacity</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {[...Array(20)].map((item, index) => {
          return (
            <ColorSquare
              key={index}
              color={selectedColor}
              opacity={index / 20}
            />
          );
        })}
      </div>

      <h2>Triad Color</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {[...Array(3)].map((item, index) => {
          return (
            <ColorSquare
              color={selectedColor}
              style={{
                filter: `hue-rotate(${index * 120}deg)`,
              }}
            />
          );
        })}
      </div>

      <h2>Complementary Color</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {[...Array(2)].map((item, index) => {
          return (
            <ColorSquare
              color={selectedColor}
              style={{
                filter: `hue-rotate(${index * 180}deg)`,
              }}
            />
          );
        })}
      </div>
      <h2>Square Color</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {[...Array(4)].map((item, index) => {
          return (
            <ColorSquare
              color={selectedColor}
              style={{
                filter: `hue-rotate(${index * 90}deg)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
