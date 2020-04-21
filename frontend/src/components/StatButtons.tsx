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

export const HumButtons: FC<StatButtonsProps> = ({ value, update }) => {
  return (
    <>
      <div>
        <Dot filled={value >= 1} onClick={() => update(1)} />
        <Dot filled={value >= 2} onClick={() => update(2)} />
        <Dot filled={value >= 3} onClick={() => update(3)} />
        <Dot filled={value >= 4} onClick={() => update(4)} />
        <Dot filled={value >= 5} onClick={() => update(5)} />
        <Dot filled={value >= 6} onClick={() => update(6)} />
        <Dot filled={value >= 7} onClick={() => update(7)} />
        <Dot filled={value >= 8} onClick={() => update(8)} />
        <Dot filled={value >= 9} onClick={() => update(9)} />
        <Dot filled={value >= 10} onClick={() => update(10)} />
      </div>
    </>
  );
};

export const WillButtons: FC<StatButtonsProps> = ({ value, update }) => {
  return (
    <>
      <div>
        <Dot filled={value >= 1} onClick={() => update(1)} />
        <Dot filled={value >= 2} onClick={() => update(2)} />
        <Dot filled={value >= 3} onClick={() => update(3)} />
        <Dot filled={value >= 4} onClick={() => update(4)} />
        <Dot filled={value >= 5} onClick={() => update(5)} />
        <Dot filled={value >= 6} onClick={() => update(6)} />
        <Dot filled={value >= 7} onClick={() => update(7)} />
        <Dot filled={value >= 8} onClick={() => update(8)} />
        <Dot filled={value >= 9} onClick={() => update(9)} />
        <Dot filled={value >= 10} onClick={() => update(10)} />
      </div>
      <div>
        <Check checked={value >= 1} onClick={() => update(1)} />;
        <Check checked={value >= 2} onClick={() => update(2)} />;
        <Check checked={value >= 3} onClick={() => update(3)} />;
        <Check checked={value >= 4} onClick={() => update(4)} />;
        <Check checked={value >= 5} onClick={() => update(5)} />;
        <Check checked={value >= 6} onClick={() => update(6)} />;
        <Check checked={value >= 7} onClick={() => update(7)} />;
        <Check checked={value >= 8} onClick={() => update(8)} />;
        <Check checked={value >= 9} onClick={() => update(9)} />;
        <Check checked={value >= 10} onClick={() => update(10)} />;
      </div>
    </>
  );
};

export const BloodButtons: FC<StatButtonsProps> = ({ value, update }) => {
  return (
    <>
      <div>
        <Check checked={value >= 1} onClick={() => update(1)} />;
        <Check checked={value >= 2} onClick={() => update(2)} />;
        <Check checked={value >= 3} onClick={() => update(3)} />;
        <Check checked={value >= 4} onClick={() => update(4)} />;
        <Check checked={value >= 5} onClick={() => update(5)} />;
        <Check checked={value >= 6} onClick={() => update(6)} />;
        <Check checked={value >= 7} onClick={() => update(7)} />;
        <Check checked={value >= 8} onClick={() => update(8)} />;
        <Check checked={value >= 9} onClick={() => update(9)} />;
        <Check checked={value >= 10} onClick={() => update(10)} />;
        <Check checked={value >= 11} onClick={() => update(11)} />;
        <Check checked={value >= 12} onClick={() => update(12)} />;
        <Check checked={value >= 13} onClick={() => update(13)} />;
        <Check checked={value >= 14} onClick={() => update(14)} />;
        <Check checked={value >= 15} onClick={() => update(15)} />;
        <Check checked={value >= 16} onClick={() => update(16)} />;
        <Check checked={value >= 17} onClick={() => update(17)} />;
        <Check checked={value >= 18} onClick={() => update(18)} />;
        <Check checked={value >= 19} onClick={() => update(19)} />;
        <Check checked={value >= 20} onClick={() => update(20)} />;
      </div>
    </>
  );
};

interface DotProps {
  filled: boolean;
  onClick: () => void;
}

interface CheckProps {
  checked: boolean;
  onClick: () => void;
}

const Check: FC<CheckProps> = ({ checked, onClick }) => (
  <input type="checkbox" className="chx" onClick={onClick}></input>
);

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
