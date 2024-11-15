// Cards.tsx
import React from "react";
import "./roadmaps.module.scss";

interface CardProps {
  title: string;
}

const Cards: React.FC<CardProps> = ({ title = " " }) => {
  return (
    <a href="/">
      <div className="relative group w-48 h-14">
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-500 group-hover:border-gray-400 transition duration-300 ease-in-out w-full h-full flex items-center justify-center">
          <p className="text-gray-300 group-hover:text-gray-100 transition duration-300 ease-in-out">
            {title}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Cards;
