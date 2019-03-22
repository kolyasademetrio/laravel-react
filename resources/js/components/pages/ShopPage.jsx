import React, { Component } from 'react';
import ProductSingle from '../products/ProductSingle';
import CatsFilterShop from '../../containers/CatsFilterShop';
import ProductsSortShop from '../../containers/ProductsSortShop';
import Pagination from '../../components/Pagination';

class ShopPage extends Component {

    componentDidMount() {
        const { setProducts } = this.props;
        axios.get('/api/products').then(({ data }) => {
            setProducts(data);
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: []
        };
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState(
            { pageOfItems: pageOfItems }
        );
    }

    render(){
        const {productsList, categories, categoriesRelationship, isReady, filterBy} = this.props;

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
                                            this.state.pageOfItems.length ? (
                                                this.state.pageOfItems.map( ( productData ) => (
                                                <ProductSingle key={productData.id} {...productData} />
                                            ))) : (
                                                <div className="products__list-empty">В этой категории товаров нет</div>
                                            )
                                        )}
                                    </div>

                                    {/*<nav className="woocommerce-pagination">
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
                                    </nav>*/}

                                    <Pagination
                                        items={productsList && productsList}
                                        onChangePage={this.onChangePage}
                                        postsPerPage={9}
                                        showFirstLast={false}
                                        showPrevNext={true}
                                    />
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