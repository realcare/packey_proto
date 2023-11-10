import '../css/components/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-container">
            <Link to={'/'} className="header-logo">
                <p>
                    너<span>의</span> 손글씨
                </p>
            </Link>
            <div className="header-route">
                <Link to={'/'} className="item">
                    너의 손글씨란?
                </Link>
                <Link to={'/aboutUs'} className="item">
                    About us
                </Link>
                <Link to={'/service'} className="item">
                    Service
                </Link>
            </div>
        </header>
    );
};

export default Header;
