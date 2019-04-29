import React, {Component} from 'react';
import {Route}            from 'react-router-dom';
import ErrorPage          from "../ErrorPage";
import Breadcrumbs        from "../../../helpers/breadcrumbs";
import Preloader          from '../../../helpers/preloader';
import ProductGallery     from '../../../containers/pages/ProductSinglePage/ProductGallery';
import ProductSummary     from "../../../containers/pages/ProductSinglePage/ProductSummary";
import ProductTabs        from '../../../containers/pages/ProductSinglePage/ProductTabs';



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
        const {error, isSingleLoading, isSingleReady, id} = this.props;

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

        return (
            <div id="primary" role="main" className="single-product content-area twentyfifteen woocommerce-page woocommerce">
                <div id="main" className="site-main">
                    <div className="container woocomm__container">
                        <div className="row woocomm__row">
                            <div className="col-xs-12">
                                <div className="woocomm__col">
                                    <Breadcrumbs />

                                    <div id={`product-${id}`} className="product">
                                        <ProductGallery />

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