import { useEffect } from "react";

const Counter = (props) => {
  const { counter, increment, decrement, remove } = props;

  const checkValue = () => {
    return counter.count === 0 ? "zero" : counter.count;
  };

  const checkCounter = () => {
    return counter.count === 0
      ? "badge bg-danger mx-2 my-2 p-2 rounded text-white"
      : "bg-warning m-3 p-3 text-dark rounded";
  };

  useEffect(() => {
    // Optional: Perform any effects related to the counter prop here
  }, [counter]);

  return (
    <div className="container mt-3">
      <button className="btn btn-primary" onClick={() => decrement(counter)}>
        Decrement
      </button>
      <span className={checkCounter()}>{checkValue()}</span>
      <button className="btn btn-primary" onClick={() => increment(counter)}>
        Increment
      </button>
      <button
        className="btn btn-danger mx-3"
        onClick={() => remove(counter)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
