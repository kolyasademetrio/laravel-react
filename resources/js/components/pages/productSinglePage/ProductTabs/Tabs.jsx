import React,{Component} from 'react';


class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
        }
    }

    setActiveIndex(index){
        this.setState({
            activeIndex: index,
        });
    }

    render(){
        const {children,tabBg} = this.props;
        
        const visibleChildren = children.filter(chldrn => chldrn !== '');

        const tabNodes = visibleChildren.map((child, index) => {
            const classNames = this.state.activeIndex === index ? ' active' : '';
            return (
                <li className={"description_tab" + classNames} onClick={this.setActiveIndex.bind(this, index)} key={'tabnode-'+index}>
                    <span>
                        {child.props.title}
                    </span>
                </li>
            );
        });

        const contentNodes = visibleChildren.map((child, index) => {
            if ( this.state.activeIndex === index ) {
                return (
                    <div key={'contentnode-'+index}>
                        {child.props.children}
                    </div>
                );
            } else {
                return null;
            }
        });

        return (
            <div className="woocommerce-tabs wc-tabs-wrapper">
                <ul className="tabs wc-tabs">
                    {tabNodes}
                </ul>

                <div className="panel" style={{
                    background: `url(${tabBg}) right bottom/auto 385px no-repeat`,
                    minHeight: '480px',
                    display: 'block'
                }}>
                    {contentNodes}
                </div>
            </div>
        );
    }
}

export default Tabs;