import "./App.css";
import PaginationTest from "./components/1. pagination/PaginationTest";
import DigitalClock from "./components/2. digital-clock";
import CountdownTimerTest from "./components/3. countdown-timer/test";

function App() {
  return (
    <div>
      <h1 className="title">25 React JS Interview Projects : Part 2</h1>
      <PaginationTest />
      <DigitalClock />
      <CountdownTimerTest />
    </div>
  );
}

export default App;
