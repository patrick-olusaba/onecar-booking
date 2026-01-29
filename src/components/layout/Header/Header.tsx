import { Link } from "react-router-dom";
import logo from "../../../assets/images/brand/luxetransfers.png";

const Header = () => {
    return (
        <header className="lux-header">
            <div className="lux-header-inner">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Luxe Transfers"
                        className="lux-logo-img"
                    />
                </Link>

                <nav className="lux-nav">
                    <Link to="/vehicle">Vehicle</Link>
                    <Link to="/hotels">Hotels</Link>
                    <Link to="/booking">Book</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact" className="lux-cta">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
