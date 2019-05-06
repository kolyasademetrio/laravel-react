import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Preloader from '../../../helpers/preloader';
import Breadcrumbs from '../../../helpers/breadcrumbs';
import ReactHtmlParser from 'react-html-parser';
import StockSinglePagePopupWrapper from './StockSinglePagePopupWrapper';

import {connect} from 'react-redux';
import {setSingleStock} from '../../../actions/stocks';

class StockSinglePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            stockSlug: this.props.match.params.slug,
        };
    }

    componentDidMount(){
        const {setSingleStock} = this.props;
        const {stockSlug} = this.state;
        setSingleStock(stockSlug);
    }

    render(){
        const {isStockSingleLoading, isStockSingleReady, stockSingleErrors, item, attachments} = this.props;

        if (stockSingleErrors === 404) {
            return <Route component={ErrorPage} />
        }

        if (isStockSingleLoading) {
            return <Preloader />
        }

        if (!isStockSingleReady) {
            return null;
        }

        const hasAttachments = attachments.length > 0;

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Breadcrumbs />
                        </div>
                    </div>
                </div>
                <div className="offers_single">
                    <div className="container offers_single__titleContainer">
                        <div className="row offers_single__titleRow">
                            <div className="col-xs-12 offers_single__titleCol">
                                <div className="offers_single__title">
                                    {ReactHtmlParser(item.title)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container offers_single__container">
                    <div className="row offers_single__row">
                        <div className="col-xs-12 offers_single__col">
                            <div className="offers_single__inner">
                                <div className="offers_single__item">
                                    {hasAttachments && (
                                        <StockSinglePagePopupWrapper />
                                    )}

                                    <div className="offers_single__content">
                                        {ReactHtmlParser(item.content)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({stocks: {isStockSingleLoading, isStockSingleReady, stockSingleErrors, stockSingleData: {item, attachments}}}) =>{
    return {
        isStockSingleLoading, isStockSingleReady, stockSingleErrors, item, attachments
    };
};

const mapDispatchToProps = dispatch => ({
    setSingleStock: slug => dispatch(setSingleStock(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockSinglePage);