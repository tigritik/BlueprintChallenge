import { useState } from "react";
import "../App.css";
import TextBox from "../components/TextBox.tsx";
import {encrypt} from "../api_wrapper.ts";
import Navbar from "../components/Navbar.tsx";

function EncryptPayload() {
    const [key, setKey] = useState("");
    const [payload, setPayload] = useState("");
    const [data, setData] = useState("");
    const [encrypting, setEncrypting] = useState("");

    function encryptPayload() {
        setEncrypting("Encrypting...");
        encrypt(key, payload).then(setData).catch(alert).finally(
            () => setEncrypting("")
        );
    }

    return (
        <>
            <Navbar />
            <h1>Encrypt Payload</h1>
            <div>
                <TextBox changeState={setKey} label="Public Key" id="key" />
                <TextBox changeState={setPayload} label="Payload" id="payload"/>
            </div>
            <p>{`${encrypting}${data}`}</p>
            <button
                onClick={encryptPayload}
                disabled={Boolean(encrypting)}
            >Encrypt Payload</button>
        </>
    );
}

export default EncryptPayload;
