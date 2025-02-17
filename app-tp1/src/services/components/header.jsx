import "./header.css"

function Header(){
    return <header className="header">
        <div className="header-container">
            <div className="logo">
                <a href="/">MonSite</a>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">À propos</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header;