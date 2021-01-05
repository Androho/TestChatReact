import React from 'react'
import {NavLink} from 'react-router-dom'
import {Icon} from 'react-materialize'

export const Navbar = () => (
    <section>
        <nav>
            <div className="nav-wrapper teal blue darken-1">
                <a href="/" className="brand-logo center">MyChat</a>
                <i className="right right-align text-primary" >Sign out{'\u00A0'}</i>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><Icon>menu</Icon></a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/" exact>Chat</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/signin">Sign In</NavLink></li>

                </ul>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
            <li><NavLink to="/" exact>Chat</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </section>
)
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
// });
