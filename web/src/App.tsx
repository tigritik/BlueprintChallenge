import { useState } from 'react'
import './App.css'
import TextBox from "./components/TextBox.tsx";

function App() {
    const [key, setKey] = useState("");
    const [payload, setPayload] = useState("");

    return (
        <>
            <h1>Encrypt Payload</h1>
            <div>
                <TextBox changeState={setKey} label="Public Key" id="key" />
                <TextBox changeState={setPayload} label="Payload" id="payload" />
            </div>
            <p>{key}</p>
            <button onClick={() => {
                console.log("Payload", payload, "Key", key);
            }}>Encrypt Payload</button>
        </>
    );
}

export default App;
