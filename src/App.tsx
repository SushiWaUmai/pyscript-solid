import PyEnv from "./components/PyEnv";
import PyScript from "./components/PyScript";

function App() {
  return (
    <div>
      <PyEnv>- numpy</PyEnv>
      <PyEnv>- pandas</PyEnv>
      <PyScript>print("Hello World")</PyScript>
    </div>
  );
}

export default App;
