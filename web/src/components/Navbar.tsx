function Navbar() {
    return (
       <nav>
           <a href={"/"}>Home</a>
           <a href={"/encrypt"}>Encrypt</a>
           <a href={"/decrypt"}>Decrypt</a>
           <a href={"/logs"}>View Logs</a>
       </nav>
    );
}

export default Navbar;
