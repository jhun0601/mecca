import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <div className="header__menu">
                    <Link to="/dashboard" className="header__title">
                        <img src="/images/favicon.png" />
                        <h1>mecca</h1>
                    </Link>
                    <div className="header__menu-links">
                        <NavLink to="/profile" activeClassName="is-active">
                            Profile
                        </NavLink>
                        <NavLink to="/post" activeClassName="is-active">
                            Post
                        </NavLink>
                        <NavLink to="/searchjobs" activeClassName="is-active">
                            Find a Job
                        </NavLink>
                    </div>
                </div>
                <button onClick={startLogout} className="button--link">
                    Logout
                </button>
            </div>
        </div>
    </header>
);
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
});
export default connect(undefined, mapDispatchToProps)(Header);
