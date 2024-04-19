import React, { useState } from 'react';
import Counter1 from './Counter1';

const Mycounter = () => {
  const [counters, setCounters] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
    { id: 4, count: 0 },
  ]);

  const decrement = (counter) => {
    setCounters((prevCounters) =>
      prevCounters.map((item) =>
        item.id === counter.id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const increment = (counter) => {
    setCounters((prevCounters) =>
      prevCounters.map((item) =>
        item.id === counter.id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };

  const deleteCounter = (counter) => {
    setCounters((prevCounters) =>
      prevCounters.filter((item) => item.id !== counter.id)
    );
  };

  const reset = () => {
    setCounters((prevCounters) =>
      prevCounters.map((item) => ({ ...item, count: 0 }))
    );
  };

  const getActiveCount = () => {
    return counters.filter((item) => item.count > 0).length;
  };

  return (
    <div className="container mt-3">
      <div>
        <button className="btn btn-success" onClick={reset}>
          Reset
        </button>
        <p className="fw-bold text-center">
          Active counters: {getActiveCount()}
        </p>
      </div>
      {counters.map((counter) => (
        <Counter1
          key={counter.id}
          counter={counter}
          increment={() => increment(counter)}
          decrement={() => decrement(counter)}
          remove={() => deleteCounter(counter)}
        />
      ))}
    </div>
  );
};

export default Mycounter;
