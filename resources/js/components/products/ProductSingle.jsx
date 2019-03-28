import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProductPrices from './ProductPrices';
import ReactHtmlParser from 'react-html-parser';
import history from '../../helpers/history';

class ProductSingle extends Component {

    constructor(props){
        super(props);

        this.postSelectedHandler = this.postSelectedHandler.bind(this, this.props.id, this.props.title);
    }

    postSelectedHandler(id, title, e){
        /*e.preventDefault();*/
        
        const name = ReactHtmlParser(title);
        
        console.log( history );

        const name2 = 'sddsd';

        const URL = `${history.location.pathname}/${name2}`;
        
        console.log( URL );
        
        history.push({pathname: '/shop/some-product', id: id });
    }

    render(){

        const {image, title, excerpt, descrtitle, descrtext, regular_price, sale_price, discount, currency, id, matchPath} = this.props;

        return (
            <div className="good__item">
                <div className="good__itemInner">
                    <div className="good__itemContent">
                        <div className="good__itemHeader">
                            <img className="good__itemImage" src={image} data-id={id} alt=""/>
                        </div>

                        <div className="good__itemTitle">{ReactHtmlParser(title)}</div>

                        <div className="good__itemExcerpt">{ReactHtmlParser(excerpt)}</div>

                        <div className="good__itemDescr">
                            <span
                                href={`${matchPath}/${id}`}
                                className="good__itemDescrTitle"
                                onClick={this.postSelectedHandler}
                            >
                                {ReactHtmlParser(descrtitle)}
                            </span>
                            <Link
                                to={`${matchPath}/${id}`}
                                className="good__itemDescrText"
                            >
                                {ReactHtmlParser(descrtext)}
                            </Link>
                        </div>

                        <ProductPrices regular_price={regular_price} sale_price={sale_price} currency={currency} />
                    </div>

                    <div className="good__itemFooter">
                        <a href="checkout/?add-to-cart=941" data-quantity="1"
                           className="good__item__add__to__cart button product_type_simple add_to_cart_button ajax_add_to_cart"
                           data-product_id={id} data-product_sku="" rel="nofollow">В корзину</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductSingle;