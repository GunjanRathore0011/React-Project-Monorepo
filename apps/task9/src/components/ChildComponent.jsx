import { memo } from "react";

const ChildComponent = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Increment Count</button>;
});

export default ChildComponent;