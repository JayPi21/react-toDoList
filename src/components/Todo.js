import React from "react";

function Todo(props) {
  const deleteTask = () => {
    props.setTodos(props.todos.filter((el) => el.id != props.id));
  };
  const setComplete = () => {
    props.todo.completed = !props.todo.completed;

    props.setTodos(
      props.todos.map((elem) => {
        if (elem.id == props.id) return props.todo;
        else return elem;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {props.text}
      </li>
      <button onClick={setComplete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTask} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
