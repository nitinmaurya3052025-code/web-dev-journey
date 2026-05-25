import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState(false);
  const tasks = ["Study React", "Build Project", "Push to GitHub"];
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br></br>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <h1>{login ? "Welcome User" : "Please Login"}</h1>
      <button onClick={() => setLogin(!login)}>login</button>
      <h1>My Task</h1>
      <ul>
        {tasks.map(function (task) {
          return <li>{task}</li>;
        })}
      </ul>
      <h1>My Task</h1>
      <ul>
        {tasks.map(function (task, index) {
          return <li key={index}>{task}</li>;
        })}
      </ul>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <h1>{text}</h1>
    </div>
  );
}

export default App;
