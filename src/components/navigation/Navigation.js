import { Link } from "react-router-dom";

function Navigation() {
    return (
        <>
            <nav className="sticky">
                <ul className="main-nav">
                    <img style={{height: "90%", marginTop: "3px"}} alt="brain" src="https://img.icons8.com/carbon-copy/50/000000/brain.png"/>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/monsters">
                            Monsters
                        </Link>
                    </li>
                    <li>
                        <Link to="/spells">
                            Spells
                        </Link>
                    </li>
                    {/* <li>
                        <SearchBar />
                    </li> */}
                    <li className="push">
                        <Link to="/signout">
                            Sign Out
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;