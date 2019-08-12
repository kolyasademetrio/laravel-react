import React, {Component} from 'react';
import Preloader from '../../../../helpers/preloader';
import GridItem from './GridItem';
import $ from 'jquery';

const NoMessage = ({children}) =>  <p className="woocommerce-noreviews" style={{minHeight: 100}}>{children}</p>;

class GridList extends Component {
    componentDidMount() {
        const {popupInit} = this.props;
        this.$el = $('.offers__items');
        popupInit(this.$el);
    }

    render(){
        const {isLoading, isReady, list, attachments, matchPath, noMessage, errors} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="col__inner">
                            <div className="row">
                                <div className="offers__items">
                                    {isLoading && !isReady && <Preloader />}
                                    {isReady && (
                                        list.length ? (
                                            list.map(item => (
                                                <GridItem
                                                    item={item}
                                                    attachments={attachments[item.id]}
                                                    matchPath={matchPath}
                                                    key={item.id}
                                                />
                                            ))
                                        ) : (
                                            <NoMessage>{noMessage}</NoMessage>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

};

export default GridList;