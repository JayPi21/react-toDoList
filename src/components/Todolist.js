import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, setTodos, filteredTodos }) => {
  return (
    // <div className="todo-container">
    //   <ul className="todo-list">
    //     {todos.map((todo) => (
    //       <li>{todo.text}</li>
    //     ))}
    //   </ul>
    // </div>
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              text={todo.text}
              key={todo.id}
              id={todo.id}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Todolist;
