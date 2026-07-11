import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(1);

  function increase() {
    setCount(count + start);
  }

  function decrease() {
    setCount(count - start);
  }

  function reset() {
    setCount(0);
  }

  function getValue(e) {
    setStart(Number(e.target.value));
  }

  return (
    <>
      <h1 className="title">
        🧮 <b></b> Counter App <b className="icon">⬩➤</b>
      </h1>

      <div className="count-number">
        <h1>{count}</h1>
        <p>● • · &nbsp;&nbsp; Current Count &nbsp;&nbsp; · • ●</p>
      </div>

      <div className="change-by">
        <p>Increase / Decrease with:</p>
        <input type="text" value={start} onChange={(e) => getValue(e)} />
      </div>

      <div className="buttons">
        <button className="btn increase" onClick={increase}>
          ⬆ Increase
        </button>
        <button className="btn decrease" onClick={decrease}>
          ⬇ Decrease
        </button>
        <button className="btn reset" onClick={reset}>
          ⟳ Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
