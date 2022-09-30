import React from "react";
import { Circle } from "../Circle/Circle";

const circle = ({ color, porcentage, size, strokeWidth }) => {
  const radius = size / 2 - 10;
  const circ = 2 * Math.PI * radius - 20;
  const strokePct = (100 - Math.round(porcentage) * circ) / 100;
  const col = strokePct !== circ ? color : "";

  return (
    <Circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={col}
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashOffset={porcentage ? strokePct : 0}
      strokeLinecap="round"
    />
  );
};

export const ProgressCircle = ({
  porcentage,
  isPlaying,
  image,
  size,
  color,
}) => {
  return (
    <div className="progress-circle">
      <svg width={size} height={size}>
        <g>
          <Circle strokeWidth={"0.4rem"} color="#3b4f73" size={size}></Circle>
          <Circle
            strokeWidth={"0.6rem"}
            color={color}
            porcentage={porcentage}
            size={size}
          ></Circle>
        </g>
      </svg>
    </div>
  );
};
