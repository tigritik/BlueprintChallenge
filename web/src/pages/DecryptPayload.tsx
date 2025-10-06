import { useState } from 'react'
import '../App.css'
import TextBox from "../components/TextBox.tsx";
import {decrypt} from "../api_wrapper.ts";
import Navbar from "../components/Navbar.tsx";

function DecryptPayload() {
    const [key, setKey] = useState("");
    const [payload, setPayload] = useState("");
    const [data, setData] = useState("");

    function decryptPayload() {
        decrypt(key, payload).then(setData);
    }

    return (
        <>
            <Navbar />
            <h1>Decrypt Payload</h1>
            <div>
                <TextBox changeState={setKey} label="Private Key" id="key" />
                <TextBox changeState={setPayload} label="Payload" id="payload" />
            </div>
            <p>{data}</p>
            <button onClick={decryptPayload}>Decrypt Payload</button>
        </>
    );
}

export default DecryptPayload;
