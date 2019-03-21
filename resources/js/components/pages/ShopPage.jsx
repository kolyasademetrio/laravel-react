import React, { Component } from 'react';
import ProductSingle from '../products/ProductSingle';
import CatsFilterShop from '../../containers/CatsFilterShop';
import ProductsSortShop from '../../containers/ProductsSortShop';

class ShopPage extends Component {

    componentDidMount() {
        const { setProducts } = this.props;
        axios.get('/api/products').then(({ data }) => {
            setProducts(data);
        });
    }

    render(){

        const {productsList, categories, categoriesRelationship, isReady, filterBy} = this.props;

        // console.log('productsList', productsList);

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
                                    {isReady && <CatsFilterShop categories={categories} />}
                                </div>

                                <div className="products__content">
                                    <div className="products__contentHeader">
                                        <div className="products__contentHeaderTitle">Весь ассортимент</div>

                                        <ProductsSortShop />
                                    </div>

                                    <div className="products__list">
                                        {isReady && (
                                            productsList.length ? (
                                                productsList.map( ( productData ) => (
                                                <ProductSingle key={productData.id} {...productData} />
                                            ))) : (
                                                <div className="products__list-empty">В этой категории товаров нет</div>
                                            )
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