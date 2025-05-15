import { useState } from "react";

interface CounterButtonProps {
  title: string;
}

const CounterButton = ({ title }: CounterButtonProps) => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      {title} count is {count}
    </button>
  );
};

export default CounterButton;
