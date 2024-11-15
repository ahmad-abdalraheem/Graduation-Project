import React from "react";
import Cards from "./Cards";

interface CardsProps {
  listItems: string[];
}

const Lister: React.FC<CardsProps> = ({ listItems }) => {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      {listItems.map((item, index) => (
        <Cards key={index} title={item} />
      ))}
    </div>
  );
};

export default Lister;
