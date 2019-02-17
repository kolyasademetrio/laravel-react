import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderBottomMenuItem extends Component {
    render(){
        const { link, title } = this.props;

        return (
            <li className="headerBottom__menuItem">
                <NavLink to={ link }
                         className="headerBottom__menuItemLink"
                         activeClassName="active"
                         onClick={ () => this.props.onHandler( title) }
                >
                    { title }
                </NavLink>
            </li>
        );
    }
}

export default HeaderBottomMenuItem;