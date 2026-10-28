import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star) => (
          <span
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            key={star}
            className="star"
          >
            {"\u2605"}
          </span>
        ))}
        <div>
          <p>Rating: {rating}</p>
          <p>Hover: {hover}</p>
        </div>
      </div>
    </div>
  );
};

/* ALTERNATIVE WAY OF STYLING:

const Rating = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Rate Your Experience</h2>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: "20px",
  },
  heading: { color: "red" },
};
*/

/* EXAMPLES OF EVENT HANDELERS:
  const clicked = (index) => console.log("Clicked!", index);
  // Notice the onClick which calles an arrow function {() => clicked(index)}
  // If we would only do onClick{clicked(index)} it would fire before we clicked
  // because calling a function executes it

  const hovered = (direction, index) =>
    console.log("Hovered!", direction, index);

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star, index) => (
          <span
            onClick={() => clicked(index)}
            onMouseEnter={() => hovered("enter", index)}
            onMouseLeave={() => hovered("leave", index)}
            key={star}
            className="star"
          >
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

*/

// "default" means you dont have to import using {}
export default Rating;
