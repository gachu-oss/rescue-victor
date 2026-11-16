function Todo({ todos, deleteTodo, search, setSearch }) {
  return (
    <div className="todo-section">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Conditional Rendering: Check if there are any todos */}
      {todos.length === 0 ? (
        <p className="empty-message">No todos for today</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span>{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;