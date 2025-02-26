import { useState } from "react";
import "./tip-calculator.css";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(10);
  const [splitCount, setSplitCount] = useState(1);
  const [tipAmount, setTipAmount] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  function handleCalculateTip() {
    if (
      !billAmount ||
      billAmount <= 0 ||
      !tipPercentage ||
      tipPercentage <= 0
    ) {
      setTipAmount(null);
      setErrorMsg("Please enter valid values for Bill amount & Tip Percentage");
      return;
    }

    const bill = parseFloat(billAmount);
    const tip = (bill * tipPercentage) / 100;
    const totalAmount = bill + tip;
    const tipAmountPerPerson = tip / splitCount;
    const totalAmountPerPerson = totalAmount / splitCount;

    setTipAmount({
      totalAmount: totalAmount.toFixed(2),
      tipPerPerson: tipAmountPerPerson.toFixed(2),
      totalPerPerson: totalAmountPerPerson.toFixed(2),
    });
    setErrorMsg("");
  }

  return (
    <div className="tip-calculator">
      <h1>TipCalculator</h1>
      <div className="input-container">
        <label>Bill Amount:</label>
        <input
          type="number"
          value={billAmount}
          onChange={(event) => setBillAmount(event.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Tip Precentage:</label>
        <input
          type="number"
          value={tipPercentage}
          onChange={(event) => setTipPercentage(event.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Number Of People:</label>
        <input
          type="number"
          value={splitCount}
          onChange={(event) => setSplitCount(event.target.value)}
        />
      </div>
      <button onClick={handleCalculateTip}>Calculate Tip</button>
      {tipAmount ? (
        <div className="tip-result-container">
          <p>Total Amount : {tipAmount.totalAmount}</p>
          <p>Tip Per Person : {tipAmount.tipPerPerson}</p>
          <p>Total Amount Per Person: {tipAmount.totalPerPerson}</p>
        </div>
      ) : null}
    </div>
  );
};

export default TipCalculator;
