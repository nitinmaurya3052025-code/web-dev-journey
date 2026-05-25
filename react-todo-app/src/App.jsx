import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1>React Todo App</h1>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button
        onClick={() => {
          if (text === "") return;

          setTasks([
            ...tasks,
            {
              text: text,
              completed: false,
            },
          ]);

          setText("");
        }}
      >
        Add Task
      </button>

      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
