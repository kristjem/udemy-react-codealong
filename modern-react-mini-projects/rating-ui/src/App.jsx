import Rating from "./components/Rating";
// Components must be upper case, so Vite does not treat it as regular HTML

const App = () => {
  // All returns must have a container
  return (
    <div>
      <Rating
        heading="How do you feel about React?"
        color="red"
        feedbackMessages={[
          "What IS this!?",
          "Not my cup of tea",
          "So so",
          "Good",
          "It's THE BEST!",
        ]}
      />
    </div>
  );
};

export default App;
