import type { Component } from "solid-js";
import { PyScript } from "pyscript-solid";

const App: Component = () => {
  return <PyScript>print("Hello World")</PyScript>;
};

export default App;
