import React, { Component } from 'react';
import ProductSingle from '../products/ProductSingle';
import CatsListFilterShop from '../../containers/CatsListFilterShop';
import ProductsSortShop from '../../containers/ProductsSortShop';
import {Pagination} from "../../helpers/pagination";

import Breadcrumbs from "../../helpers/breadcrumbs";

class ShopPage extends Component {

    componentDidMount() {
        const { setProducts } = this.props;
        axios.get('/api/products').then(({ data }) => {
            setProducts(data);
        });
    }

    render(){
        const {productsList, categories, isReady, setPagination, currentPage, pager} = this.props;

        return (
            <div className="container woocomm__container">
                <div className="row woocomm__row">
                    <div className="col-xs-12">
                        <div className="woocomm__col">

                            <Breadcrumbs />

                            <div className="products__wrapper">
                                <div className="products__sidebar">
                                    {isReady && <CatsListFilterShop categories={categories} />}
                                </div>

                                <div className="products__content">
                                    <div className="products__contentHeader">
                                        <div className="products__contentHeaderTitle">Весь ассортимент</div>

                                        <ProductsSortShop />
                                    </div>

                                    <div className="products__list">
                                        
                                        {isReady && (
                                            productsList ? (
                                                productsList.map( ( productData ) => {
                                                    return (
                                                        <ProductSingle key={productData.id} {...productData} />
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