import { useState } from 'react'
import './App.css'
import TextBox from "./components/TextBox.tsx";

function App() {
  const [text, setText] = useState("");

  return (
    <>
        <TextBox changeState={setText} />
        <p>{text}</p>
    </>
  );
}

export default App;
