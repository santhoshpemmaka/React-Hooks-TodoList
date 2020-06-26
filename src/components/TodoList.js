import React, { useState } from "react";
import "./TodoForm.scss";

const TodoList = props => {
  const [checkstatus, onChangeCheckbox] = useState(false);

  const onChangebox = () => {
    const checkboxStatus = !checkstatus;
    onChangeCheckbox(checkboxStatus);
  };

  return (
    <div>
      {props.todos &&
        props.todos.length > 0 &&
        props.todos.map(todo => {
          return (
            <div className="todoItem" key={todo}>
              <span className="todoName">
                <span>
                  <input
                    onChange={onChangebox}
                    className="Checkbox"
                    type="checkbox"
                  />
                  <h3 className="todoOption">{todo}</h3>
                </span>
              </span>
              <span>
                <button
                  className="todo-btn"
                  onClick={() => props.onChangeButton(todo)}
                >
                  Remove
                </button>
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
