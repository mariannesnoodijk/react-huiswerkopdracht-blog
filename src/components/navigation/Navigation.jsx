import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink> </li>
                <li><NavLink to="/new" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Nieuwe post</NavLink> </li>
                <li><NavLink to="/blogposts" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Alle posts</NavLink> </li>
            </ul>
        </nav>
    );
}

export default Navigation;