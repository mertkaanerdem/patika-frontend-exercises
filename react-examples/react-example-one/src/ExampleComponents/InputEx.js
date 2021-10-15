import { useState } from "react";
function InputEx() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const gettingName = (e) => setName(e.target.value);
  const gettingSurname = (e) => setSurname(e.target.value);

  return (
    <>
      <input placeholder="Say my Name" value={name} onChange={gettingName} />
      <br />
      <hr />
      <input
        placeholder="Say my Surname"
        value={surname}
        onChange={gettingSurname}
      />
      <h3>
        {name} {surname}
      </h3>
    </>
  );
}

export default InputEx;
