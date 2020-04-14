import React, { FC } from "react";

const DOT_SIZE = 20;

export interface StatButtonsProps {
  value: number;
  update: (newValue: number) => void;
}

export const StatButtons: FC<StatButtonsProps> = ({ value, update }) => {
  return (
    <div>
      <Dot filled={value >= 1} onClick={() => update(1)} />
      <Dot filled={value >= 2} onClick={() => update(2)} />
      <Dot filled={value >= 3} onClick={() => update(3)} />
      <Dot filled={value >= 4} onClick={() => update(4)} />
      <Dot filled={value >= 5} onClick={() => update(5)} />
    </div>
  );
};

interface DotProps {
  filled: boolean;
  onClick: () => void;
}

const Dot: FC<DotProps> = ({ filled, onClick }) => (
  <button className="statButt" onClick={onClick}>
    <svg height={DOT_SIZE} width={DOT_SIZE} viewBox="0 0 100 100">
      <ellipse
        cx="50"
        cy="50"
        rx="36"
        ry="40"
        stroke="black"
        strokeWidth="12"
        fill={filled ? "black" : "white"}
      />
    </svg>
  </button>
);
