import type { Component } from "solid-js";
import { PyScript } from "pyscript-solid";

const App: Component = () => {
  return <PyScript src="./hello.py" />;
};

export default App;
