import React from "react";

export interface DataListProps {
  list: string[];
  id: string;
}

export const DataList = ({ list, id }: DataListProps) => {
  return (
    <datalist id={id}>
      {list.map((disc) => (
        <option value={disc} />
      ))}
    </datalist>
  );
};
