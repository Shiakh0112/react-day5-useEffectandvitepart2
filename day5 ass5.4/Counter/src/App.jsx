import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}

export default App;
