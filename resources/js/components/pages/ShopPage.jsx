import React, { Component } from 'react';
import ProductSingle from '../products/ProductSingle';
import CatsListFilterShop from '../../containers/CatsListFilterShop';
import ProductsSortShop from '../../containers/ProductsSortShop';
import {Pagination} from '../../helpers/pagination';
import Preloader from '../../helpers/preloader';
import {Breadcrumbs, BreadcrumbsItem, getPageNameSlug} from "../../helpers/Breadcrumbs";

class ShopPage extends Component {
    componentDidMount() {
        const {setAllProducts} = this.props;
        setAllProducts();
    }

    render(){
        const {productsList, categories, isProductsReady, isProductsLoading, setPagination, currentPage, pager} = this.props;
        const {matchPath, pageName} = getPageNameSlug(this, this.props.isPagesReady, this.props.pages);

        return (
            <div className="container woocomm__container">
                <div className="row woocomm__row">
                    <div className="col-xs-12">
                        <div className="woocomm__col">

                            <Breadcrumbs>
                                <BreadcrumbsItem title="Главная" path="/" />
                                <BreadcrumbsItem title={pageName} path="" />
                            </Breadcrumbs>

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
                                        {isProductsLoading && !isProductsReady && <Preloader />}
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