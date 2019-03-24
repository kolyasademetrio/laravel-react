import {connect} from 'react-redux';
import ShopPage from '../../components/pages/ShopPage';


import {setProducts} from '../../actions/products';
import {setFilter, setPagination} from '../../actions/filter';

import getCategoryProductRelations from '../../helpers/getCategoryProductRelations';



const sortBy = (products, filterProductBy) => {
    switch(filterProductBy){
        case 'price_asc':
            return products && products.sort((a, b) => (a.regular_price - b.regular_price));
        case 'price_desc':
            return products && products.sort((a, b) => (b.regular_price - a.regular_price))
        default:
            return products && products;
    }
}

const getVisibleProducts = (productsList, filterBy, filterProductBy, catsRelation) => {
    switch(filterBy){
        case "all":
            return sortBy(productsList, filterProductBy);
        default:
            const productIDs = catsRelation[filterBy] ? catsRelation[filterBy] : [];
            return sortBy(
                productsList.filter(item => (productIDs.includes(item.id))),
                filterProductBy
            );
    }
}


const getPaginatadProducts = (isReady, visibleProducts, page, perPage) => {

    if ( isReady && visibleProducts.length ) {
        const currentPage = page;

        const end = page * perPage;
        const begin = end - perPage;

        return visibleProducts.slice(begin, end);
    }
};

const getPages = (isReady, visibleProducts, perPage) => {
    return Math.ceil(isReady && visibleProducts.length && visibleProducts.length / perPage);
};






const mapStateToProps = (state, ownProps) => {
    const {products, filter, pagination} = state;

    const visibleProducts = getVisibleProducts(
        products.items.productsList,
        filter.filterShopBy,
        filter.filterProductShopBy,
        getCategoryProductRelations( products.items.categoriesRelationship )
    );

    const categoriesRelationship = getCategoryProductRelations( products.items.categoriesRelationship );

    /* START: Pagination */
    const perPage = 3;

    const paginatedProducts = getPaginatadProducts(
        products.isReady && products.isReady,
        visibleProducts && visibleProducts,
        filter.page || 1,
        perPage
    );

    const pages = getPages(
        products.isReady && products.isReady,
        visibleProducts && visibleProducts,
        perPage
    );
    /* END: Pagination */
    
    return {
        productsList: paginatedProducts,
        categories: products.items.categories,
        categoriesRelationship: categoriesRelationship,
        isReady: products.isReady,
        filterBy: filter.filterShopBy,
        filterProductShopBy: filter.filterProductShopBy,
        pages: pages,
        currentPage: filter.page || 1,
    }
};

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products)),
    setPagination: page => dispatch(setPagination(page)),
    setFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);