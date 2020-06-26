import React, { useState, useEffect } from "react";
import "./TodoForm.scss";
import TodoList from "./TodoList";
const TodoForm = props => {
  const [todoText, todoState] = useState("");
  const [todoList, todoListState] = useState(props.List);
  const onChangeText = e => {
    const textValue = e.target.value;
    todoState(textValue);
  };
  const onChangeSubmit = e => {
    e.preventDefault();
    todoListState([...todoList, todoText]);
    todoState("");
  };

  const onChangeButton = todo => {
    const filterTodo = todoList && todoList.filter(item => item !== todo);
    todoListState(filterTodo);
  };
  useEffect(() => {}, [todoList]);
  return (
    <div>
      <form onSubmit={e => onChangeSubmit(e)}>
        <input
          className="Todotext"
          value={todoText}
          onChange={e => onChangeText(e)}
          placeholder="Add Todo"
        />
      </form>
      <TodoList
        todos={todoList}
        onChangeButton={todo => onChangeButton(todo)}
      />
    </div>
  );
};
TodoForm.defaultProps = {
  List: []
};
export default TodoForm;
