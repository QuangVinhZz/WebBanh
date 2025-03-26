import React, { useReducer } from "react";

// Định nghĩa các action
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const RESET = "RESET";

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

const CounterAppWithReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="counter-container">
      <h1>Counter: {state.count}</h1>
      <div className="button-group">
        <button
          className="btn increase"
          onClick={() => dispatch({ type: INCREASE })}
        >
          INCREASE
        </button>
        <button
          className="btn decrease"
          onClick={() => dispatch({ type: DECREASE })}
        >
          DECREASE
        </button>
        <button className="btn reset" onClick={() => dispatch({ type: RESET })}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default CounterAppWithReducer;
