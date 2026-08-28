import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Aduwa Kennedy</div>

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
                <a href="#contact" className="hire-button">Hire Me</a>
            </div>
        </nav>
    )
}

export default Navbar;