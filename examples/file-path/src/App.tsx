import { PyScript } from "pyscript-solid";
import type { Component } from "solid-js";

const App: Component = () => {
  return <PyScript src="hello.py" />;
};

export default App;
