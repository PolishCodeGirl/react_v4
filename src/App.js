import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";

const App = () => (
  <div>
    <h1>Adopt me!</h1>
    <Pet name='Azor' animal='dog' breed="mixed"/>
    <Pet name='Chester' animal='cat' breed="mixed"/>
    <Pet name='Ćwirek' animal='bird' breed="mixed"/>
  </div>
);

render(<App />, document.getElementById("root"));
