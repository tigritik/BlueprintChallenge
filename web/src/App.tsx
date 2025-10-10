import "./App.css";
import Navbar from "./components/Navbar.tsx";

function App() {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <header className="home-header">
                    <h1 className="home-title">SecureLog</h1>
                    <img src="/logo.png"
                        alt="Site Logo" className="home-logo" />
                    <p className="home-description">
                        SecureLog is a leading contributor to active
                        cryptography research efforts. We believe in
                        free and accessible security protocols for
                        everyone. Use our website to encrypt/decrypt
                        your data.
                    </p>
                </header>

                <section className="key-info">
                    <h2>Encryption Protocol</h2>
                    <p>
                        All encryption keys used on this website must be:
                    </p>
                    <ul>
                        <li>Exactly 32 bytes (256 bits) long.</li>
                        <li>Encoded as a Base64 string.</li>
                    </ul>
                    <p>Here's an example public/private key pair:</p>
                    <div className="key-example">
                        <div>
                            <strong>Public Key:</strong>
                            <pre className="key-block">
                                PdoQ/IZXeCSU+MrrC4znTYFlncbcq6rNUg2/ZeyXOgM=
                            </pre>
                        </div>
                        <div>
                            <strong>Private Key:</strong>
                            <pre className="key-block">
                                FFDSdyzUbEq34fs4C+3Zar9P3YmtMxt+i+MhwZMqc/M=
                            </pre>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="site-footer">
                <span>Source Code: </span>
                <a href="https://github.com/tigritik/BlueprintChallenge">
                    github.com/tigritik/BlueprintChallenge
                </a>
            </footer>
        </>
    );
}

export default App;
