import "./styles.css";
import { useReducer } from "react";

const simpleState = {
  name: "krishna",
  addr: "Vizag"
};

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "changeAdd":
      return { ...state, addr: action.payload };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatchaction] = useReducer(reducerFn, simpleState);

  return (
    <div className="App">
      {state.addr}
      <br />
      <button
        onClick={() => {
          dispatchaction({
            type: "changeAdd",
            payload: "Warangal"
          });
        }}
      >
        chnage add
      </button>
    </div>
  );
}
