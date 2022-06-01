import type { Component } from "solid-js";
import { PyScript, PyScriptProvider } from "pyscript-solid";

const App: Component = () => {
  return (
    <PyScriptProvider>
      <PyScript>print("Hello World")</PyScript>
    </PyScriptProvider>
  );
};

export default App;
