import React, {Component} from 'react';
import Breadcrumbs from "../../../helpers/breadcrumbs";
import ProductGallery from './ProductGallery';
import ProductTabs from '../../../containers/pages/ProductSinglePage/ProductTabs/ProductTabs';
import {Route} from 'react-router-dom';
import ErrorPage from "../ErrorPage";
import Preloader from '../../../helpers/preloader';
import ProductSummary from "../../../containers/pages/ProductSinglePage/ProductSummary";

class ProductSinglePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            'productSlug': this.props.match.params.product,
        };
    }

    componentDidMount() {
        const {setProductBySlug} = this.props;
        const {productSlug} = this.state;
        setProductBySlug(productSlug);
    }

    render(){
        const {error, isSingleLoading, isSingleReady} = this.props;

        if (error === 404) {
            return <Route component={ErrorPage} />
        }
        if (isSingleLoading) {
           return (
               <Preloader />
           );
        }
        if (!isSingleReady) {
            return null;
        }

        const {id} = this.props.product;

        const {productAttachments} = this.props;
        
        return (
            <div id="primary" role="main" className="single-product content-area twentyfifteen woocommerce-page woocommerce">
                <div id="main" className="site-main">
                    <div className="container woocomm__container">
                        <div className="row woocomm__row">
                            <div className="col-xs-12">
                                <div className="woocomm__col">

                                    <Breadcrumbs />

                                    <div id={"product-" + id} className="product">
                                        <ProductGallery productAttachments={productAttachments} />

                                        <ProductSummary />

                                        <ProductTabs />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ProductSinglePage;