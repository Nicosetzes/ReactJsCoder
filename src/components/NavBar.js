import { CartWidget } from './CartWidget'
import './CartWidget.css'

export const NavBar = () => {
    return (
        <nav>
            <div className="logo">Logo</div>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Link 1</a>
                </li>
                <li>
                    <a href="#">Link 2</a>
                </li>
                <li>
                    <a href="#">Link 3</a>
                </li>
                <li>
                    <a href="#">Link 4</a>
                </li>
            </ul>
            <div className="login">
                <button>Login</button>
            </div>
            <CartWidget />
        </nav>
    );
}
