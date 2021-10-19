import React, { useState, useEffect } from "react";

function UseEffectEx() {
  const [name, setName] = useState("Ad belirecek");
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Başlangıçta ve herhangi bir state güncellenince çalışır");
  });

  useEffect(() => {
    console.log("Sadece başlangıçta çalışır");
  }, []);

  useEffect(() => {
    console.log(
      "Başlangıçta ve ardından sadece ilgili state güncellenince çalışır"
    );
  }, [name]);

  return (
    <div>
      <h2>useEffect Example</h2>
      <hr />
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Ekle</button>
      <hr />
      <p>{name}</p>
      <button onClick={() => setName("Mertkaan Erdem")}>Ekle</button>
    </div>
  );
}

export default UseEffectEx;
