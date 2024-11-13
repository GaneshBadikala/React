
import logo from '../images/logo.jpeg'

const Header = () => {
    return (<div className="header">
        <div className="logo">
            <img id="logo" src={logo}></img>
        </div>
        <ul>
            <li>Home </li>
            <li>contact Us </li>
            <li>About </li>
            <li>Cart </li>
        </ul>
    </div>)
}
export default Header