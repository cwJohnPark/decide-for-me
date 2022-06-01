import React, { useState } from "react";
import InputComponent from "./InputComponent";
import Button from 'react-bootstrap/Button';
import { createSearchParams, useNavigate} from "react-router-dom";

const IndexComponent = () => {
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

  const navigate = useNavigate();

  const handleClickButton = () => {
    console.log('배열', items);

    const text = items[getRandomInt(0, items.length)].text; 

    navigate({
      pathname: "/result",
      search: `?${createSearchParams({ //자동으로 쿼리 파람으로 넣어줌.
        text: text
     })}`
    })
  }

  return (
    <div>
      <h3>Decide For Me</h3>
      <Button onClick = {handleClickButton}> 선택! </Button>
      <InputComponent items={items} />
      <form onSubmit={handleSubmit}>
        <input id="newInputBox" onChange={handleChange} value={text} />
        <button>Add #{items.length + 1}</button>
      </form>
    </div>
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

export default IndexComponent;