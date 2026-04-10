import Logo from "../../assets/images/logo.png"
import "./styles.css"

export default function Header() {
    return (
    <header>
        <div>
            <img src={Logo} />
            <h1>Ricardo</h1>
        </div>
        <nav>
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </nav>
        <div>
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
    </header>
    )
}

