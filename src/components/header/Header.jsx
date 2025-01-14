import logo from '../../assets/logo.png'
import s from '../header/header.module.scss'

export default function Header() {
    return (
        <header className={s.header}>
            <img src={logo} alt="Logo" />
            <nav>
                <ul>
                    <li><a href="#paz">Paz</a></li>
                    <li><a href="#saude">Saúde</a></li>
                    <li><a href="#alegria">Alegria</a></li>
                </ul>
            </nav>
        </header>
    );
}
