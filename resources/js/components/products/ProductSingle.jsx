import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class ProductSingle extends Component {

    render(){

        const { img, title, exerpt, descrTitle, descrText, price, currency, id } = this.props;

        return (
            <div className="good__item">
                <div className="good__itemInner">
                    <div className="good__itemContent">
                        <div className="good__itemHeader">
                            <img className="good__itemImage" src={ img } data-id={ id } alt=""/>
                        </div>

                        <div className="good__itemTitle">{ ReactHtmlParser(title) }</div>

                        <div className="good__itemExcerpt">{ ReactHtmlParser(exerpt) }</div>

                        <div className="good__itemDescr">
                            <a href="/" className="good__itemDescrTitle">{ ReactHtmlParser(descrTitle) }</a>
                            <a href="/" className="good__itemDescrText">{ ReactHtmlParser(descrText) }</a>
                        </div>
                        <div className="good__itemPrices">
                            <span className="good__itemRegularPrice">
                                <span className="good__itemRegularPriceValue">{ ReactHtmlParser(price) }</span>
                                <span className="good__itemRegularPriceCur">{ ReactHtmlParser(currency) }</span>
                            </span>
                        </div>
                    </div>

                    <div className="good__itemFooter">
                        <a href="checkout/?add-to-cart=941" data-quantity="1"
                           className="good__item__add__to__cart button product_type_simple add_to_cart_button ajax_add_to_cart"
                           data-product_id={ id } data-product_sku="" rel="nofollow">В корзину</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductSingle;