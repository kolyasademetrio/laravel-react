import React, { Component } from 'react';
import ProductSingle from '../products/ProductSingle';

class ShopPage extends Component {

    componentDidMount() {
        const { setProducts } = this.props;
        axios.get('/api/products').then(({ data }) => {
            setProducts(data);
        });
    }

    render(){

        const {productsList, categories, categoriesRelationship, isReady} = this.props;

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
                                                <span className="products__categoryItemLink all__categories active">
                                                    Весь ассортимент
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span className="products__categoryItemLink">
                                                    Скрабы
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span className="products__categoryItemLink">
                                                    Хит продаж
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span className="products__categoryItemLink">
                                                    Косметика для лица
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span className="products__categoryItemLink">
                                                    Косметика для тела
                                                </span>
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
                                        {isReady && (
                                            productsList.map( ( productData ) => (
                                                <ProductSingle key={productData.id} {...productData} />
                                            ))
                                        )}

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