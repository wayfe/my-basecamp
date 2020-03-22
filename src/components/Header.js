import React from "react";
import {Link} from "react-router-dom";

export const Header = () => (
    <header>
        <div>
            <div>
                <Link to="/"><p>Dashboard</p></Link>
            </div> 
        </div>     
    </header>
)

export default Header;