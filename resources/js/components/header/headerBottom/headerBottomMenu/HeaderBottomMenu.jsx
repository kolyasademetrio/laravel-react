import React, {Component} from 'react';
import HeaderBottomMenuItem from './HeaderBottomMenuItem';
import uniqueId from 'react-html-id';
import headerMenuItems from '../../../database/header-menu-data';

class HeaderBottomMenu extends Component {

    state = {
        menuItems: headerMenuItems,
    }

    constructor() {
        super()
        uniqueId.enableUniqueIds(this)
    }

    onClickAlert = (title) => {
        console.log( title );
    }

    render() {

        return (
            <div className="headerBottom__menu" id="headerBottom__menu">
                <ul className="headerBottom__menuList">
                    {
                        this.state.menuItems.map( headerMenuItem => (
                            <HeaderBottomMenuItem key={this.nextUniqueId('menu-item')}
                                                  {...headerMenuItem}
                                                  onHandler={this.onClickAlert}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default HeaderBottomMenu;