import React, { Component } from 'react';
import ProductSingle from '../products/ProductSingle';
import CatsListFilterShop from '../../containers/CatsListFilterShop';
import ProductsSortShop from '../../containers/ProductsSortShop';
//import { Pagination } from '@sketchpixy/rubix';
import {getPager, Pagination} from "../../helpers/pagination";

class ShopPage extends Component {

    componentDidMount() {
        const { setProducts } = this.props;
        axios.get('/api/products').then(({ data }) => {
            setProducts(data);
        });
    }

    render(){
        const {productsList, categories, isReady, setPagination, pages, currentPage, perPage} = this.props;

        const Pager = getPager(pages, currentPage, perPage);
        
        console.log( Pager );

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
                                    {isReady && <CatsListFilterShop categories={categories} />}
                                </div>

                                <div className="products__content">
                                    <div className="products__contentHeader">
                                        <div className="products__contentHeaderTitle">Весь ассортимент</div>

                                        <ProductsSortShop />
                                    </div>

                                    <div className="products__list">
                                        
                                        {/*{ console.log( productsList ) }*/}
                                        
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

                                    {Pager && (
                                        <Pagination
                                            pager={Pager}
                                            page={currentPage}
                                            setPagination={setPagination}
                                        />
                                    )}

                                    {/*{(pages > 1) && (
                                        {<Pagination className="pagination"
                                            bsSize="medium"
                                            maxButtons={10}
                                            first
                                            last
                                            boundaryLinks
                                            items={pages}
                                            activepage={currentPage}
                                            onSelect={setPagination}
                                        />}
                                    )}*/}
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