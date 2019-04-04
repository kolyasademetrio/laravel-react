import React, {Component} from 'react';
import Breadcrumbs from "../../../helpers/breadcrumbs";
import ReactHtmlParser from 'react-html-parser';
import ProductGallery from './ProductGallery';
import Quantity from './Quantity';
import ProductTabs from './ProductTabs/ProductTabs';

class ProductSinglePage extends Component {

    componentDidMount() {
        const {setProductSingle} = this.props;
        const productSlug = this.props.match.params.product;

        axios.get(`/api/products/${productSlug}`)
            .then( ({data}) => {
                setProductSingle(data);
            });
    }

    render(){
        if (!this.props.isSingleReady) {
            return null;
        }
        
        const {id, title, excerpt, descr, regular_price, sale_price, currency, product_description_tab_content, product_ingredients_tab_content, product_usage_tab_content} = this.props.product;

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

                                        <div className="summary entry-summary">
                                            <h1 className="product_title entry-title">{ReactHtmlParser(title)}</h1>
                                            <div className="goodSingle__excerpt">{ReactHtmlParser(excerpt)}</div>
                                            <div className="goodSingle__descr">{ReactHtmlParser(descr)}</div>
                                            <div className="goodSingle__table">
                                                <div className="tr">
                                                    <div className="th">Цена</div>
                                                    <div className="th">Количество</div>
                                                    <div className="th">Доставка</div>
                                                </div>
                                                <div className="tr">
                                                    <div className="td">
                                                        <div className="price">
                                                            <span className="woocommerce-Price-amount amount">
                                                                {ReactHtmlParser(hasSalePrice ? sale_price : regular_price)}
                                                                <span className="woocommerce-Price-currencySymbol">
                                                                    {ReactHtmlParser(currency)}
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="td">
                                                        <div className="form cart">
                                                            <Quantity />
                                                        </div>
                                                    </div>
                                                    <div className="td terms">
                                                        <div className="good_shipping_terms">
                                                            <div className="good_shipping_imgWrap">
                                                                <img src="/uploads/2018/08/shipping-e1535634026174.png"/>
                                                            </div>
                                                            <div className="good_shipping_text">
                                                                Бесплатная при<br/> заказе от 299 грн
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tr">
                                                    <div className="td">&nbsp;</div>
                                                    <div className="td">
                                                        <button
                                                            type="submit" data-product_id="107"
                                                            data-product_sku="ss"
                                                            data-quantity="1"
                                                            className="button product_type_simple"
                                                        >
                                                            В корзину
                                                        </button>
                                                    </div>
                                                    <div className="td">&nbsp;</div>
                                                </div>
                                            </div>
                                            <div className="woocommerce-product-details__short-description">
                                                <p>Крем для</p>
                                            </div>
                                        </div>

                                        <ProductTabs
                                            descr={product_description_tab_content}
                                            ingredients={product_ingredients_tab_content}
                                            usage={product_usage_tab_content}
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