import React, {Component} from 'react';
import Breadcrumbs from "../../../helpers/breadcrumbs";
import ReactHtmlParser from 'react-html-parser';
import ProductGallery from './ProductGallery';
import Quantity from './Quantity';

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

                                        <div className="woocommerce-tabs wc-tabs-wrapper">
                                            <ul className="tabs wc-tabs" role="tablist">
                                                <li className="description_tab active">
                                                    <a href="#tab-description">Описание</a>
                                                </li>
                                                <li className="ingredients_tab">
                                                    <a href="#tab-ingredients">Состав</a>
                                                </li>
                                                <li className="usage_tab">
                                                    <a href="#tab-usage">Применение</a>
                                                </li>
                                                <li className="reviews_tab">
                                                    <a href="#tab-reviews">Отзывы (0)</a>
                                                </li>
                                            </ul>

                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'block'}}>
                                                {ReactHtmlParser(product_description_tab_content)}
                                            </div>

                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--ingredients panel entry-content wc-tab" id="tab-ingredients" role="tabpanel" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'none'}}>
                                                {ReactHtmlParser(product_ingredients_tab_content)}
                                            </div>


                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--usage panel entry-content wc-tab" id="tab-usage" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'none'}}>
                                                {ReactHtmlParser(product_usage_tab_content)}
                                            </div>

                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" style={{display: 'none'}}>
                                                <div id="reviews" className="woocommerce-Reviews">
                                                    <div id="comments" className="comments">
                                                        <h2 className="woocommerce-Reviews-title">Отзывы</h2>
                                                        <p className="woocommerce-noreviews">Отзывов пока нет.</p>
                                                    </div>

                                                    <div id="review_form_wrapper" className="review_form_wrapper">
                                                        <div id="review_form">
                                                            <div id="respond" className="comment-respond">
                                                                <span id="reply-title" className="comment-reply-title">
                                                                    Будьте первым, кто оставил отзыв на “Детский крем” <small><a id="cancel-comment-reply-link" href="#" style={{display:'none'}}>Отменить ответ</a></small>
                                                                </span>
                                                                <form method="post" id="commentform" className="comment-form" noValidate="">
                                                                    <div className="reply-title-after">Используйте
                                                                        данную форму, чтобы оставить отзыв о товаре или
                                                                        задать вопрос
                                                                    </div>
                                                                    <p className="comment-form-author">
                                                                        <label>Ваше имя &nbsp;<span className="required">*</span></label>
                                                                        <input id="author" name="author" type="text" size="30" aria-required="true" required=""/>
                                                                    </p>
                                                                    <p className="comment-form-email">
                                                                        <label>E-mail &nbsp;<span className="required">*</span></label>
                                                                        <input id="email" name="email" type="email" size="30" aria-required="true" required=""/>
                                                                    </p>
                                                                    <p className="comment-form-comment">
                                                                        <label>Текст сообщения &nbsp;<span className="required">*</span></label>
                                                                        <textarea id="comment" name="comment" cols="45" rows="8"></textarea>
                                                                    </p>
                                                                    <p className="form-submit">
                                                                        <input name="submit" type="submit" id="submit" className="submit" value="Отправить"/>
                                                                        <input type="hidden" name="comment_post_ID" id="comment_post_ID"/>
                                                                        <input type="hidden" name="comment_parent" id="comment_parent"/>
                                                                    </p>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                        </div>
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