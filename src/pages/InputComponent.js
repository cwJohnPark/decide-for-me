import React from "react";

// 1. 선택 버튼 추가 
// 2. navigate to 결과 화면 
// 3. 결과화면으로 갈 때 설정 값 넘기기

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
