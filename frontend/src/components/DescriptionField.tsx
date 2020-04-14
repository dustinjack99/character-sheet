import React, { FC, ChangeEvent } from "react";

interface Props {
  label: string;
  value: string;
  updateValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DescriptionField: FC<Props> = (props) => {
  return (
    <div>
      <h4>{props.label}</h4>
      <input
        type="text"
        value={props.value}
        onChange={props.updateValue}
      ></input>
    </div>
  );
};

export default DescriptionField;
