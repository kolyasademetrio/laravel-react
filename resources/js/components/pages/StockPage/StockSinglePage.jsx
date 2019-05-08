import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Preloader from '../../../helpers/preloader';
import Breadcrumbs from '../../../helpers/breadcrumbs';
import stockSinglePageMagnificPopupInit from '../StockPage/stockSinglePageMagnificPopupInit';
import SinglePage from '../commons/SinglePage/SinglePage';

class StockSinglePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
        };
    }

    componentDidMount(){
        const {setSingleStock} = this.props;
        const {slug} = this.state;
        setSingleStock(slug);
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

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Breadcrumbs />
                        </div>
                    </div>
                </div>

                <SinglePage
                    item={item}
                    attachments={attachments}
                    initPopup={stockSinglePageMagnificPopupInit}
                />
            </Fragment>
        );
    }
}

export default StockSinglePage;