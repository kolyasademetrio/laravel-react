import React from 'react';

const ProductsFilterShop = ({setFilter}) => {
    return (
        <div className="products__contentHeaderFilter">
            <span className="products__contentHeaderFilterText">Сортировать по: Цене</span>
            <span className="products__contentHeaderFilterLinks">
                <ul name="orderby" className="orderby">
                    <li>
                        <span
                            className="product__filter_link"
                            onClick={setFilter.bind(this, 'price_asc')}
                        >
                        </span>
                    </li>
                    <li>
                        <span
                            className="product__filter_link" onClick={setFilter.bind(this, 'price_desc')}
                        >
                        </span>
                    </li>
                </ul>
            </span>
        </div>
    );
}

export default ProductsFilterShop;