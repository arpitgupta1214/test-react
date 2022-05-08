import { useState } from "react";

function App() {
  const [text, setText] = useState("")
  return (
    <div className="App">
      <input placeholder="text" value={text} onChange={(e) => {setText(e.target.value)}} />
    </div>
  );
}

export default App;
