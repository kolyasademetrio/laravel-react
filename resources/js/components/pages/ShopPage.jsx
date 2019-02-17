import React, { Component } from 'react';
import ProductSingle from '../products/ProductSingle';
import allProductsData from '../database/all-products-data';

class ShopPage extends Component {

    state = {
        allProductsData: allProductsData,
    }

    render(){
        return (
            <div className="container woocomm__container">
                <div className="row woocomm__row">
                    <div className="col-xs-12">
                        <div className="woocomm__col">
                            <div className="kama_breadcrumbs" itemScope="" itemType="http://schema.org/BreadcrumbList">
                                <span itemProp="itemListElement" itemType="http://schema.org/ListItem">
                                    <a href="/" itemProp="item">
                                        <span itemProp="name">Главная</span>
                                    </a>
                                </span>
                                <span className="kb_sep"> / </span>
                                Ассортимент
                            </div>
                            <div className="products__wrapper">
                                <div className="products__sidebar">
                                    <div className="products__categories">
                                        <div className="products__categoryHeader">
                                            <div className="products__categoryTitle">Ассортимент продуктов</div>
                                            <a href="#products__categoryList" className="products__categoryMenuBtn"></a>
                                        </div>

                                        <ul className="products__categoryList" id="products__categoryList">
                                            <li className="products__categoryItem">
                                                <a href="/shop" className="products__categoryItemLink all__categories active">
                                                    Весь ассортимент
                                                </a>
                                            </li>
                                            <li className="products__categoryItem">
                                                <a href="/product-category/%d1%81%d0%ba%d1%80%d0%b0%d0%b1%d1%8b/" className="products__categoryItemLink">
                                                    Скрабы </a>
                                            </li>
                                            <li className="products__categoryItem">
                                                <a href="/product-category/%d1%85%d0%b8%d1%82-%d0%bf%d1%80%d0%be%d0%b4%d0%b0%d0%b6/" className="products__categoryItemLink">
                                                    Хит продаж</a>
                                            </li>
                                            <li className="products__categoryItem">
                                                <a href="/product-category/cosmeticiviso/" className="products__categoryItemLink">
                                                    Косметика для лица</a>
                                            </li>
                                            <li className="products__categoryItem">
                                                <a href="/product-category/setregalo/"
                                                   className="products__categoryItemLink">
                                                    Косметика для тела </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="products__content">
                                    <div className="products__contentHeader">
                                        <div className="products__contentHeaderTitle">Весь ассортимент</div>
                                        <div className="products__contentHeaderFilter">
                                            <span className="products__contentHeaderFilterText">Сортировать по: Цене</span>
                                            <span className="products__contentHeaderFilterLinks">
                                                <ul name="orderby" className="orderby">
                                                    <li>
                                                        <a href="/shop/?orderby=price"></a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop/?orderby=price-desc"></a>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="products__list">
                                        {
                                            this.state.allProductsData.map( ( productData ) => (
                                                <ProductSingle key={productData.id} {...productData} />
                                            ))
                                        }
                                    </div>
                                    <nav className="woocommerce-pagination">
                                        <ul className="page-numbers">
                                            <li>
                                                <span aria-current="page" className="page-numbers current">1</span>
                                            </li>
                                            <li>
                                                <a className="page-numbers" href="/shop/page/2/">2</a>
                                            </li>
                                            <li>
                                                <a className="next page-numbers"  href="/shop/page/2/">→</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopPage;