import React from "react";
import {Link} from "react-router-dom";
import {startLogout} from "../actions/auth";
import {connect} from "react-redux";

const Header = ({startLogout}) => (
    <header>
        <div>
            <div>
                <Link to="/"><p>Dashboard</p></Link>
                <button className="logout-button" onClick={startLogout}>Logout</button>  

            </div> 
        </div>     
    </header>
)

const mapDispatchToProps = (dispatch, props) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);