import React from "react";

const ColorSquare = ({
  color,
  tint = 100,
  shade = 50,
  opacity = 1,
  onClick,
  style,
}: {
  color: string;
  tint?: number;
  shade?: number;
  opacity?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        width: "10%",
        aspectRatio: 1,
        minWidth: 100,
        minHeight: 100,
        backgroundColor: color,
        filter: `brightness(${tint}%) saturate(${shade}%)`,
        opacity,
        ...style,
      }}
    />
  );
};

export default ColorSquare;
