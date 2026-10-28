import Rating from "./components/Rating";
// Components must be upper case, so Vite does not treat it as regular HTML

const App = () => {
  // All returns must have a container
  return (
    <div>
      <Rating />
    </div>
  );
};

export default App;
