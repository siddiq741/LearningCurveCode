import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
    return (
        <nav>
            <Link  to = '/'>
                <h3>Logo</h3>
            </Link>
            <ul className = 'nav-links'>
                <Link to = '/manage-access'>
                    <li className = 'link'>Access Manager</li>
                </Link>
                <Link  to = '/login'>
                    <li className = 'link'>Sign In</li>
                </Link>
                <Link to = '/about'>
                    <li className = 'link'>About</li>
                </Link>
            </ul>
        </nav>
    );
  }
  
  export default Nav;