import React from "react";

const Form = ({ setTodos, todos, setStatus }) => {
  const getInput = (e) => {
    setTodos([
      ...todos,
      {
        text: e.target[0].value,
        completed: false,
        id: Math.random() * 1000 + 1,
      },
    ]);

    e.target[0].value = "";
    e.preventDefault();
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form onSubmit={getInput}>
      <input type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
