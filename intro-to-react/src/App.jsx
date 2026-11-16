import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function App() {
  // 1. MOUNTING PHASE: Initialize state by checking localStorage first
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("my_todos");
    // If data exists in localStorage, convert it from JSON string back to an array.
    // Otherwise, start with an empty array [].
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [search, setSearch] = useState("");

  // 2. UPDATING PHASE: Save to localStorage every time 'todos' changes
  useEffect(() => {
    localStorage.setItem("my_todos", JSON.stringify(todos));
  }, [todos]); // <-- The dependency array watches 'todos'

  // Function to Add a Todo (giving each one a unique ID)
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Creates a unique timestamp ID
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to Delete a Todo by its unique ID
  const deleteTodo = (idToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(updatedTodos);
  };

  // Filter todos based on the search bar
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="planner-card">
        <h1 className="title">Daily Planner</h1>

        {/* Form Component */}
        <TodoForm addTodo={addTodo} />

        {/* List Component */}
        <Todo
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
}

export default App;