import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);

  const settingNumber = () => {
    setNumber(1);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={settingNumber}>Setting Number</button>
    </>
  );
}

export default App;
