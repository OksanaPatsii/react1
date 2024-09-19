import "./App.css";
import Petinfo from "./components/Petinfo";

function App() {
  return (
    <div className="App">
      <Petinfo
        animal="dog"
        age="4"
        hasPet
      />
      <Petinfo
        animal="cat"
        age="5"
        hasPet={false}
      />
    </div>
  );
}

export default App;
