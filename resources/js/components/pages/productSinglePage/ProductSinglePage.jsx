import React, {Component} from 'react';
import Breadcrumbs from "../../../helpers/breadcrumbs";
import ProductGallery from './ProductGallery';
import ProductTabs from '../../../containers/pages/ProductSinglePage/ProductTabs/ProductTabs';
import {Route} from 'react-router-dom';
import ErrorPage from "../ErrorPage";
import Preloader from '../../../helpers/preloader';
import ProductSummary from "./ProductSummary";

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

        const {
            id,
            title, excerpt, descr, regular_price, sale_price, currency,
            product_description_tab_content, product_ingredients_tab_content, product_usage_tab_content, tab_bg// for ProductTabs
        } = this.props.product;

        const {productAttachments} = this.props;
        
        const hasSalePrice = this.props.isSingleReady && sale_price == 0 ? false : true;

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

                                        <ProductSummary
                                            title={title}
                                            excerpt={excerpt}
                                            descr={descr}
                                            hasSalePrice={hasSalePrice}
                                            regular_price={regular_price}
                                            sale_price={sale_price}
                                            currency={currency}
                                        />

                                        <ProductTabs
                                            descr={product_description_tab_content}
                                            ingredients={product_ingredients_tab_content}
                                            usage={product_usage_tab_content}
                                            tabBg={tab_bg}
                                        />
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