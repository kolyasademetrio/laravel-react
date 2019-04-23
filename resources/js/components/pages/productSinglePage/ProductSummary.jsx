import React from 'react';
import ReactHtmlParser from "react-html-parser";
import Quantity from "./Quantity";

const ProductSummary = props => {
    const {title, excerpt, descr, hasSalePrice, regular_price, sale_price, currency} = props;

    return (
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
                            type="submit"
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
    );
}

export default ProductSummary;