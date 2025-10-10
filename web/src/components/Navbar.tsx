import "./navbar.css"

function Navbar() {
    return (
       <nav className="navbar">
           <a className="nav-logo" href={"/"}>
               <img alt="logo" src="/icon.png" height="30px" />
           </a>
           <a className="nav-entry" href={"/"}>Home</a>
           <a className="nav-entry" href={"/encrypt"}>Encrypt</a>
           <a className="nav-entry" href={"/decrypt"}>Decrypt</a>
           <a className="nav-entry" href={"/logs"}>View Logs</a>
       </nav>
    );
}

export default Navbar;
