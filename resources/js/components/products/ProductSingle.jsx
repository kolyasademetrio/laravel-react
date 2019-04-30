import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProductPrices from './ProductPrices';
import ReactHtmlParser from 'react-html-parser';

const ProductSingle = (props) => {
    const {image, title, excerpt, descrtitle, descrtext, regular_price, sale_price, discount, currency, id, matchPath, slug} = props;

    return (
        <div className="good__itemInner">
            <div className="good__itemContent">
                <div className="good__itemHeader">
                    <img className="good__itemImage" src={image} data-id={id} alt=""/>
                </div>
                <div className="good__itemTitle">{ReactHtmlParser(title)}</div>
                <div className="good__itemExcerpt">{ReactHtmlParser(excerpt)}</div>
                <div className="good__itemDescr">
                    <Link
                        to={{
                            pathname: `${matchPath}/${slug}`,
                            title: title,
                            id: id,
                        }}
                        className="good__itemDescrTitle"
                    >
                        {ReactHtmlParser(descrtitle)}
                    </Link>

                    <Link
                        to={{
                            pathname: `${matchPath}/${slug}`,
                            /*title: title,
                            id: id,*/
                        }}
                        className="good__itemDescrText"
                    >
                        {ReactHtmlParser(descrtext)}
                    </Link>

                </div>
                <ProductPrices regular_price={regular_price} sale_price={sale_price} currency={currency} />
            </div>

            <div className="good__itemFooter">
                <a
                    href="#"
                    className="good__item__add__to__cart"
                    data-product_id={id}
                >
                    В корзину
                </a>
            </div>
        </div>
    );
}

export default ProductSingle;