import { useState } from "react";
import "./App.css";

import Button from "./components/Button/Button.jsx";

function App() {
  const [temp, setTemp] = useState(16);

  const increaseTemp = () => {
    setTemp(temp + 1);
  };

  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  return (
    <section id="wrapper" className={temp > 15 ? "too-warm" : "too-cold"}>
      <header></header>
      <main id="main" className="">
        <p id="temp">{temp}C</p>
        <div id="buttons">
          <Button id="decrease" label="Decrease" clickHandler={decreaseTemp} />
          <Button  id="increase" label="Increase" clickHandler={increaseTemp} />
        </div>
      </main>
      <footer></footer>
      <div id="bg-blur"></div>
    </section>
  );
}

export default App;
