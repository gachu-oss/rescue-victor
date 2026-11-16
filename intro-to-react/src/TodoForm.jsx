import { useState } from "react";

function TodoForm({ addTodo }) {
  // Local state just for what the user is currently typing
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    // 1. Prevent the browser from reloading the entire page
    e.preventDefault();

    // 2. Stop empty submissions (ignore spaces)
    if (text.trim() === "") return;

    // 3. Send the new todo text up to App.jsx
    addTodo(text);

    // 4. Clear the input box for the next item
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;