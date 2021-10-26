import { useState } from "react";

function InputAdvancedEx() {
  const [form, setForm] = useState({ name: "", surname: "", age: Number });

  const gettingInputs = (e) => {
    console.log(e.target.name); //TODO:buradaki name input property name'i. bu olmazsa inputlarda aynı fn kullanılırken karışma olur;

    setForm({ ...form, [e.target.name]: e.target.value }); //TODO:...form yapılıyor çünkü surname girerken name de bizimle gelmeli,
  };
  return (
    <>
      <h3>Advanced Input Example</h3>
      <hr />
      <input
        name="name"
        placeholder="Say my name"
        value={form.name}
        onChange={gettingInputs}
      />
      <input
        name="surname"
        placeholder="Say my surname"
        value={form.surname}
        onChange={gettingInputs}
      />
      <input
        type="number"
        name="age"
        placeholder="Guess my age"
        value={form.age}
        onChange={gettingInputs}
      />
      <hr />
      <h4>
        {form.name} {form.surname.toUpperCase()} {form.age}
      </h4>
    </>
  );
}

export default InputAdvancedEx;
