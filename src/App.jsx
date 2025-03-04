import "./App.css";
import PaginationTest from "./components/1. pagination/PaginationTest";
import MusicPlayer from "./components/10. music-player";
import ProgressBar from "./components/11. progress-bar";
import BMICalculator from "./components/12. bmi-calculator";
import ButtonRippleEffect from "./components/13. button-ripple-effect";
import DigitalClock from "./components/2. digital-clock";
import CountdownTimerTest from "./components/3. countdown-timer/test";
import StepProgressBarTest from "./components/4. step-progress-bar/test";
import RandomQuoteGenerator from "./components/5. random-quote-generator";
import TooltipTest from "./components/6. Tooltip/test";
import CurrencyConverter from "./components/7. currency-converter";
import FilterProducts from "./components/8. filter-products";
import TipCalculator from "./components/9. tip-calculator";

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
      <hr style={{ border: "1px solid black" }} />
      <CurrencyConverter />
      <hr style={{ border: "1px solid black" }} />
      <FilterProducts />
      <hr style={{ border: "1px solid black" }} />
      <TipCalculator />
      <hr style={{ border: "1px solid black" }} />
      <MusicPlayer />
      <hr style={{ border: "1px solid black" }} />
      <ProgressBar />
      <hr style={{ border: "1px solid black" }} />
      <BMICalculator />
      <hr style={{ border: "1px solid black" }} />
      <ButtonRippleEffect />
    </div>
  );
}

export default App;
