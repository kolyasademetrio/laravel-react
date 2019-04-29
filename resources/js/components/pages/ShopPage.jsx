import React, { Component } from 'react';
import ProductSingle from '../products/ProductSingle';
import CatsListFilterShop from '../../containers/CatsListFilterShop';
import ProductsSortShop from '../../containers/ProductsSortShop';
import {Pagination} from '../../helpers/pagination';
import Breadcrumbs from '../../helpers/breadcrumbs';
import Preloader from '../../helpers/preloader';

class ShopPage extends Component {
    componentDidMount() {
        const {setAllProducts} = this.props;
        setAllProducts();
    }

    render(){
        const {productsList, categories, isProductsReady, isProductsLoading, setPagination, currentPage, pager} = this.props;
        
        const matchPath = this.props.match.path;

        return (
            <div className="container woocomm__container">
                <div className="row woocomm__row">
                    <div className="col-xs-12">
                        <div className="woocomm__col">

                            <Breadcrumbs />

                            <div className="products__wrapper">
                                <div className="products__sidebar">
                                    {isProductsReady && <CatsListFilterShop categories={categories} />}
                                </div>

                                <div className="products__content">
                                    <div className="products__contentHeader">
                                        <div className="products__contentHeaderTitle">Весь ассортимент</div>

                                        <ProductsSortShop />
                                    </div>

                                    <div className="products__list">
                                        {isProductsLoading && <Preloader />}
                                        {isProductsReady && (
                                            productsList ? (
                                                productsList.map( ( productData ) => {
                                                    return (
                                                        <div className={'good__item'} key={productData.id}>
                                                            <ProductSingle {...productData} matchPath={matchPath} />
                                                        </div>
                                                    );
                                                })) : (
                                                <div className="products__list-empty">В этой категории товаров нет</div>
                                            )
                                        )}
                                    </div>

                                    {pager && (
                                        <Pagination
                                            pager={pager}
                                            page={currentPage}
                                            setPagination={setPagination.bind(this)}
                                        />
                                    )}
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