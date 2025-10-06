import { useState } from 'react'
import '../App.css'
import TextBox from "../components/TextBox.tsx";
import {encrypt} from "../api_wrapper.ts";
import Navbar from "../components/Navbar.tsx";

function EncryptPayload() {
    const [key, setKey] = useState("");
    const [payload, setPayload] = useState("");
    const [data, setData] = useState("");

    function encryptPayload() {
        encrypt(key, payload).then(setData);
    }

    return (
        <>
            <Navbar />
            <h1>Encrypt Payload</h1>
            <div>
                <TextBox changeState={setKey} label="Public Key" id="key" />
                <TextBox changeState={setPayload} label="Payload" id="payload" />
            </div>
            <p>{data}</p>
            <button onClick={encryptPayload}>Encrypt Payload</button>
        </>
    );
}

export default EncryptPayload;
