import "./App.css";
import SouthIndian from "./components/menu/southIndian"
import Specails from "./components/menu/saiArunaSpecails";
import Cuisine from "./components//menu/saiArunaRestaurent";
import Desert from "./components//menu/desert";
import Bevarages from "./components/menu/bevarages&shakes";

function App() {
  
  return (
    <div>
      
      <div className="buttonContainer flex-center">
        <button className="swiggyButton button">
          <a
            href="https://www.swiggy.com/city/bangalore/sai-aruna-marathahalli-rest437749"
            target="_blank"
          >
            order on swiggy
          </a>
        </button>
        <button className="zomatoButton button">
          <a
            href="https://www.zomato.com/bangalore/sai-aruna-brookefield-bangalore"
            target="_blank"
          >
            order on zomato
          </a>
        </button>
      </div>

      <div className="menu-con">
        <SouthIndian />
        <Specails />
        <Cuisine />
        <Desert />
        <Bevarages />
      </div>
    </div>
  );
}

export default App;
