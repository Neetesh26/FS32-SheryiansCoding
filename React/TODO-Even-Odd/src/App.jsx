import React, { useState } from "react";
import Even from "./Components/Even";
import Odd from "./Components/Odd";

const App = () => {
  const [number, setnumber] = useState("");
  const [even, seteven] = useState([]);
  const [odd, setodd] = useState([]);
  console.log(number);

  const handler = () => {
    if (number === "") return;
    if (number % 2 === 0) {
      seteven([...even, number]);
    } else {
      setodd([...odd, number]);
    }
  };
  return (
    <div>
      <input
        value={number}
        style={{
          border: "1px solid gray",
        }}
        type="number"
        onChange={(e) => setnumber(e.target.value)}
      />
      <button onClick={handler}>click</button>
      <Even Even={even} />
      <Odd Odd={odd} />
    </div>
  );
};

export default App;
