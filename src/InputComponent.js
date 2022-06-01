import React from "react";

class InputComponent extends React.Component {
  render() {
    return (
      <form>
        {this.props.items.map((item) => (
          <div key={item.id}>
            <input key={item.id} defaultValue={item.text} />
          </div>
        ))}
      </form>
    );
  }
}

export default InputComponent;
