import React from "react";

const style = {
  backgroundColor: "#4c50a4",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div style={style}>
      <p className="title">完了済みのTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li>
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
