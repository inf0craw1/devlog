import "../styles/header.scss";
import { Link } from "react-router-dom";

export function Header(){

    return(
        <div className="header-container">
            <div className="r-container">
                <div className="header-logo">
                    <Link to="/"><h1>Devlog</h1></Link>
                </div>
                <div className="header-menu">
                    <Link to="/auth"><div className="menu-item">login</div></Link>
                </div>
            </div>
        </div>
        
    );
}