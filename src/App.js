import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App ">
      <Navigation />
      <Home/>
    </div>
  );
}

export default App;
