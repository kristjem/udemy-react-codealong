const Rating = () => {
  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
    </div>
  );
};

/* ALTERNATIV MÅTE Å STYLE PÅ:

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

// "default" means you dont have to import using {}
export default Rating;
