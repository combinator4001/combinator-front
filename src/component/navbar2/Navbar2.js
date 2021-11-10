import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import './navbar2.css'


class Navbar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }
    render() {
        const { isExpanded } = this.state;

        return (
            <div className="navigation">
                <nav className="nav">
                    <i
                        className="fa fa-bars"
                        aria-hidden="true"
                        onClick={e => this.handleToggle(e)}
                    />
                    <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <NavLink  activeClassName="active" to="/CV">
                            <div className="navBar_options">
                                <a className="navBar_options">CV Builder</a>
                            </div>
                        </NavLink>
                        <NavLink activeClassName="active" to="/Blog">
                            <div className="navBar_options">
                                <a >Blog</a>
                            </div>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar2;
