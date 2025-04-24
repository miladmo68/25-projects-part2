import "./App.css";
import PaginationTest from "./components/1. pagination/PaginationTest";
import MusicPlayer from "./components/10. music-player";
import ProgressBar from "./components/11. progress-bar";
import BMICalculator from "./components/12. bmi-calculator";
import ButtonRippleEffect from "./components/13. button-ripple-effect";
import DragAndDropFeature from "./components/14. drag-and-drop";
import FormValidation from "./components/15. simple-form-validation";
import FileUpload from "./components/16. file-upload";
import Quiz from "./components/17. quiz-app";
import NestedComments from "./components/18. nested-comments";
import PdfViewer from "./components/19. pdf-viewer";
import DigitalClock from "./components/2. digital-clock";
import FirebaseTodo from "./components/20. firebase-todo";
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
      <hr style={{ border: "1px solid black" }} />
      <DragAndDropFeature />
      <hr style={{ border: "1px solid black" }} />
      <FormValidation />
      <hr style={{ border: "1px solid black" }} />
      <FileUpload />
      <hr style={{ border: "1px solid black" }} />
      <Quiz />
      <hr style={{ border: "1px solid black" }} />
      <NestedComments />
      <hr style={{ border: "1px solid black" }} />
      <PdfViewer />
      <hr style={{ border: "1px solid black" }} />
      <FirebaseTodo />
    </div>
  );
}

export default App;
