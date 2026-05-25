function TodoItem({ task, index, tasks, setTasks }) {
  return (
    <li
      style={{
        textDecoration: task.completed ? "line-through" : "none",

        opacity: task.completed ? 0.5 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => {
          const newTasks = tasks.map((t, i) => {
            if (i === index) {
              return {
                ...t,
                completed: !t.completed,
              };
            }

            return t;
          });

          setTasks(newTasks);
        }}
      />

      {task.text}

      <button
        onClick={() => {
          const newTasks = tasks.filter((_, i) => i !== index);

          setTasks(newTasks);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
