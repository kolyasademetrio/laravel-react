import React, { Component, Fragment } from 'react';
import stocksPageMagnificPopupInit from './stocksPageMagnificPopupInit';
import GridList from '../commons/grid/GridList';
import {Breadcrumbs, BreadcrumbsItem, getPageNameSlug} from "../../../helpers/Breadcrumbs";

class StockPage extends Component {
    componentDidMount(){
        const {setAllStocks} = this.props;
        setAllStocks();
    }

    render(){
        const {isStocksReady, isStocksLoading, stocksErrors, stocksList, stockAttachment} = this.props;
        const {matchPath, pageName} = getPageNameSlug(this, this.props.isPagesReady, this.props.pages);
        
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Breadcrumbs>
                                <BreadcrumbsItem title="Главная" path="/" />
                                <BreadcrumbsItem title={pageName} path="" />
                            </Breadcrumbs>
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
            </Fragment>
        );
    }
}

export default StockPage;