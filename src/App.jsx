import "./App.css";
import PaginationTest from "./components/1. pagination/PaginationTest";
import DigitalClock from "./components/2. digital-clock";
import CountdownTimerTest from "./components/3. countdown-timer/test";
import StepProgressBarTest from "./components/4. step-progress-bar/test";
import RandomQuoteGenerator from "./components/5. random-quote-generator";
import TooltipTest from "./components/6. Tooltip/test";

function App() {
  return (
    <div>
      <h1 className="title">25 React JS Interview Projects : Part 2</h1>
      <PaginationTest />
      <hr style={{ border: "1px solid black" }} />
      <DigitalClock />\
      <hr style={{ border: "1px solid black" }} />
      <CountdownTimerTest />
      <hr style={{ border: "1px solid black" }} />
      <StepProgressBarTest />
      <hr style={{ border: "1px solid black" }} />
      <RandomQuoteGenerator />
      <hr style={{ border: "1px solid black" }} />
      <TooltipTest />
    </div>
  );
}

export default App;
