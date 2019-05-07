import React, { Component } from 'react';
import Breadcrumbs from '../../../helpers/breadcrumbs';
import StockSingle from './StockSingle';
import Preloader from '../../../helpers/preloader';
import $ from 'jquery';
import stocksPageMagnificPopupInit from './stocksPageMagnificPopupInit';


const NoStocksMessage = () =>  <p className="woocommerce-noreviews" style={{minHeight: 100}}>Акций пока нет.</p>;

class StockPage extends Component {
    componentDidMount(){
        const path = this.props.match.path;

        console.log( 'path', path );

        const {setAllStocks} = this.props;
        setAllStocks(path);

        this.$el = $('.offers__items');
        stocksPageMagnificPopupInit(this.$el);
    }

    render(){
        const {isStocksReady, isStocksLoading, stocksErrors, stocksList, stockAttachment} = this.props;

        const matchPath = this.props.match.path;
        
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Breadcrumbs />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="col__inner">
                                <div className="row">
                                    <div className="offers__items">
                                        {isStocksLoading && <Preloader />}
                                        {isStocksReady && (
                                            stocksList.length ? (
                                                stocksList.map(s => (
                                                    <StockSingle
                                                        stock={s}
                                                        attachments={stockAttachment[s.id]}
                                                        matchPath={matchPath}
                                                        key={s.id}
                                                    />
                                                ))
                                            ) : (
                                                <NoStocksMessage />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default StockPage;