import "./styles.css";
import { useReducer } from "react";

const simpleState = {
  name: "krishna",
  addr: "Vizag"
};

const randomAddre = [
  "warangal",
  "Mumbai",
  "Wayanad",
  "Hyderbad",
  "Vishakapatnam",
  "Adilabad",
  "Coorg",
  "Munnar",
  "Karimnagar",
  "Rajamundry"
];

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "changeAdd":
      return {
        ...state,
        addr: randomAddre[Math.floor(Math.random() * randomAddre.length)]
      };
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
            type: "changeAdd"
          });
        }}
      >
        chnage add
      </button>
    </div>
  );
}
