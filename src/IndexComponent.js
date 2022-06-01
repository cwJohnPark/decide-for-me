import React, { useState } from "react";
import InputComponent from "./InputComponent";

export default function IndexComponent() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length === 0) {
      return;
    }

    const newItem = {
      text: text,
      id: new Date(),
    };

    setItems(items.concat(newItem));
    setText("");
    console.log(items);
  };

  return (
    <div>
      <h3>Decide For Me</h3>
      <InputComponent items={items} />
      <form onSubmit={handleSubmit}>
        <input id="newInputBox" onChange={handleChange} value={text} />
        <button>Add #{items.length + 1}</button>
      </form>
    </div>
  );
}
