import { useState } from "react";
import Counter from "./Counter";

// useEffect(() => {
//   setIsVisible(isVisible);
// }, []);
function ComponentUnmountEx() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && <Counter />}
      <hr />
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default ComponentUnmountEx;
