import React, { FC } from "react";
import { NumericDictionary } from "lodash";

const DOT_SIZE = 20;

export interface StatButtonsProps {
  value: number;
  update: (newValue: number) => void;
}

export interface WillButtonsProps {
  value: number;
  value2: number;
  update: (newValue: number) => void;
  update2: (newValue: number) => void;
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

export const WillButtons: FC<WillButtonsProps> = ({
  value,
  value2,
  update,
  update2,
}) => {
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
        <Check check={value2 >= 1} onClick={() => update2(1)} />
        <Check check={value2 >= 2} onClick={() => update2(2)} />
        <Check check={value2 >= 3} onClick={() => update2(3)} />
        <Check check={value2 >= 4} onClick={() => update2(4)} />
        <Check check={value2 >= 5} onClick={() => update2(5)} />
        <Check check={value2 >= 6} onClick={() => update2(6)} />
        <Check check={value2 >= 7} onClick={() => update2(7)} />
        <Check check={value2 >= 8} onClick={() => update2(8)} />
        <Check check={value2 >= 9} onClick={() => update2(9)} />
        <Check check={value2 >= 10} onClick={() => update2(10)} />
      </div>
    </>
  );
};

export const BloodButtons: FC<StatButtonsProps> = ({ value, update }) => {
  return (
    <>
      <div>
        <Check check={value >= 1} onClick={() => update(1)} />
        <Check check={value >= 2} onClick={() => update(2)} />
        <Check check={value >= 3} onClick={() => update(3)} />
        <Check check={value >= 4} onClick={() => update(4)} />
        <Check check={value >= 5} onClick={() => update(5)} />
        <Check check={value >= 6} onClick={() => update(6)} />
        <Check check={value >= 7} onClick={() => update(7)} />
        <Check check={value >= 8} onClick={() => update(8)} />
        <Check check={value >= 9} onClick={() => update(9)} />
        <Check check={value >= 10} onClick={() => update(10)} />
        <Check check={value >= 11} onClick={() => update(11)} />
        <Check check={value >= 12} onClick={() => update(12)} />
        <Check check={value >= 13} onClick={() => update(13)} />
        <Check check={value >= 14} onClick={() => update(14)} />
        <Check check={value >= 15} onClick={() => update(15)} />
        <Check check={value >= 16} onClick={() => update(16)} />
        <Check check={value >= 17} onClick={() => update(17)} />
        <Check check={value >= 18} onClick={() => update(18)} />
        <Check check={value >= 19} onClick={() => update(19)} />
        <Check check={value >= 20} onClick={() => update(20)} />
      </div>
    </>
  );
};

interface DotProps {
  filled: boolean;
  onClick: () => void;
}

interface CheckProps {
  check: boolean;
  onClick: () => void;
}

const Check: FC<CheckProps> = ({ check, onClick }) => (
  <input
    type="checkbox"
    className="chx"
    checked={check}
    onClick={onClick}
  ></input>
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
