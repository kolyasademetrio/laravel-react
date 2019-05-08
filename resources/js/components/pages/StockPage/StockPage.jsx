import React, { Component } from 'react';
import Breadcrumbs from '../../../helpers/breadcrumbs';
import stocksPageMagnificPopupInit from './stocksPageMagnificPopupInit';
import GridList from '../commons/GridList';

class StockPage extends Component {
    componentDidMount(){
        const {setAllStocks} = this.props;
        setAllStocks();
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

                <GridList
                    isLoading={isStocksLoading}
                    isReady={isStocksReady}
                    errors={stocksErrors}
                    list={stocksList}
                    attachment={stockAttachment}
                    matchPath={matchPath}
                    noMessage='Акций пока нет.'
                    popupInit={stocksPageMagnificPopupInit}
                />
            </React.Fragment>
        );
    }
}

export default StockPage;