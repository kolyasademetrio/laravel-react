import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const HeaderBottomMenuItem = ({slug, title, onHandler}) => {
        return (
            <li className="headerBottom__menuItem">
                <NavLink to={`/${slug}`}
                         className="headerBottom__menuItemLink"
                         activeClassName="active"
                         onClick={() => onHandler(title)}
                >
                    {title}
                </NavLink>
            </li>
        )
}

export default HeaderBottomMenuItem;