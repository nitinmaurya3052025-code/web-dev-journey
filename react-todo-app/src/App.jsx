import { useState } from "react";

import InputBox from "./components/InputBox";
import Display from "./components/Display";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <InputBox text={text} setText={setText} />

      <Display text={text} />
    </div>
  );
}

export default App;
