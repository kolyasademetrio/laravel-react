import React, {Component} from 'react';
import HeaderBottomMenuItem from './HeaderBottomMenuItem';
import uniqueId from 'react-html-id';

class HeaderBottomMenu extends Component {
    componentDidMount(){
        const {setAllPages} = this.props;
        setAllPages();
    }

    onClickAlert = (title) => {
        console.log( title );
    }

    render() {
        const {items, isPagesLoading, isPagesReady, pagesError} = this.props.pages;

        if (!isPagesReady === true) {
            return null;
        }
        
        return (
            <div className="headerBottom__menu" id="headerBottom__menu">
                <ul className="headerBottom__menuList">
                    {
                        items.map( menuItem => (
                            <HeaderBottomMenuItem
                                key={menuItem.id}
                                onHandler={this.onClickAlert}
                                {...menuItem}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default HeaderBottomMenu;