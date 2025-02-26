import Tooltip from ".";
import "./tooltip.css";

const TooltipTest = () => {
  return (
    <div>
      <h1>Tooltip</h1>
      <Tooltip
        delay={500}
        content={"Tooltip Content"}
        children={<p>Hover Me</p>}
      />
    </div>
  );
};

export default TooltipTest;
