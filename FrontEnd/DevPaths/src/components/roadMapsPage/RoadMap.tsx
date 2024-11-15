import { useState } from "react";
import React from "react";
import Divider from "./Divider";
import NewCard from "./NewCard";
import Hero from "./Hero";
import Lister from "./Lister";
import NavMenu from "./NavMenu";
import "./roadmaps.module.scss"; // Ensure this includes the Tailwind config

const RoadMap: React.FC = () => {
  const [cards] = useState([
    {
      id: 1,
      title: "FrontEnd",
      description: "Best FrontEnd RoadMap",
      img: "/FRpic.jpeg",
    },
    {
      id: 2,
      title: "BackEnd",
      description: "Best BackEnd RoadMap",
      img: "/FRpic.jpeg",
    },
    {
      id: 3,
      title: "FullStack",
      description: "Best FullStack RoadMap",
      img: "/FRpic.jpeg",
    },
    {
      id: 4,
      title: "FullStack",
      description: "Best FullStack RoadMap",
      img: "/FRpic.jpeg",
    },
  ]);
  const listItems1 = [
    "BackEnd",
    "FullStack",
    "FrontEnd",
    "DevOps",
    "QA",
    "Game Development",
    "UX/UI",
    "IOS",
    "Andriod",
  ];
  const listItems2 = [
    "Computer Science",
    "React",
    "Angular",
    "JavaScript",
    "TypeScript",
    "HTML & CSS",
  ];

  return (
    <div className="main-roadmap flex flex-col pb-12">
      {/* ---------------------------------------------- */}

      <Hero />

      {/* ---------------------------------------------- */}

      <NavMenu />

      {/* ---------------------------------------------- */}

      <Divider text="Most Popular RoadMaps" />

      {/* ---------------------------------------------- */}

      <div className="overflow-hidden w-full relative mt-9">
        <div className="flex justify-center gap-5">
          {cards.map((card) => (
            <NewCard
              key={card.id}
              title={card.title}
              description={card.description}
              img={card.img}
            />
          ))}
        </div>
      </div>
      {/* ---------------------------------------------- */}

      <Divider text="Role-based Roadmaps" />

      {/* ---------------------------------------------- */}

      <div className="justify-center mx-32 ">
        <Lister listItems={listItems1} />
      </div>

      {/* ---------------------------------------------- */}

      <Divider text="Skill-based Roadmaps" />

      {/* ---------------------------------------------- */}

      <div className="justify-center mx-32 ">
        <Lister listItems={listItems2} />
      </div>
    </div>
  );
};

export default RoadMap;
