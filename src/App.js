import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [status, todos]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed == true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed == false));
        break;
      default:
        setfilteredTodos(todos);
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    let storedTodos = localStorage.getItem("todos");
    if (storedTodos != null) setTodos(JSON.parse(storedTodos));
  };
  return (
    <div className="App">
      <header>Jay's todo list</header>
      <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />

      <Todolist
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
