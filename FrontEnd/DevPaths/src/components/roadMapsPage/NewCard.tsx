import "./roadmaps.module.scss";
import "../../index.css";

interface CardProps {
  title: string;
  description: string;
  img: string;
}

const NewCard = ({ title, description, img }) => {
  return (
    <div className="card card-compact bg-base-100 w-72 shadow-xl">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
