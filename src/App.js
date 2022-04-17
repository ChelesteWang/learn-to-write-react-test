import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return <Counter initialCount={0} maxClicks={3} />;
}

export default App;
