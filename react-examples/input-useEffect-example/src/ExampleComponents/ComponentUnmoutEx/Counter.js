import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("State çalışıyor");

    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => clearInterval(interval); //TODO:ComponentUnmount ex: clearInterval oluşturulan intervali durdurmak içindir. Bu durunca unmount olduğunda hata vermeyecek
  }, []);
  return (
    <div>
      <h4>{counter}</h4>

      <button onClick={() => setCounter(counter + 1)}>Ekle</button>
    </div>
  );
}

export default Counter;
