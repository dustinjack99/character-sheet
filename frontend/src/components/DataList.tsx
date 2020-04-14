import React from "react";

export interface DataListProps {
  list: string[];
  id: string;
}

export const DataList = ({ list, id }: DataListProps) => {
  return (
    <datalist id={id}>
      {list.map((val, i) => (
        <option key={i} value={val} />
      ))}
    </datalist>
  );
};
