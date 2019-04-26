import {connect} from 'react-redux';
import {setProducts, setAllProducts} from '../../actions/products';
import {setFilter, setPagination} from '../../actions/filter';
import ShopPage from '../../components/pages/ShopPage';
import {getPager} from "../../helpers/pagination";
import {getCategoryProductRelationsByCatSlug} from '../../helpers/getCategoryProductRelations';


function sortBy(products, sortBy){
    switch(sortBy){
        case 'price_asc':
            return products && products.sort((a, b) => (a.regular_price - b.regular_price));
        case 'price_desc':
            return products && products.sort((a, b) => (b.regular_price - a.regular_price))
        default:
            return products && products;
    }
}

function getVisibleProducts(products, filterBy, catsRelation){
    switch(filterBy){
        case "all":
            return products && products;
        default:
            const productIDs = catsRelation[filterBy] ? catsRelation[filterBy] : [];
            return products && products.filter(item => (productIDs.includes(item.id)));
    }
}

function getPaginatedProducts(products, page, perPage){
    const end = page * perPage;
    const begin = end - perPage;

    return products && products.slice(begin, end);
};

function getPages(visibleProducts, perPage){
    return Math.ceil(visibleProducts && visibleProducts.length / perPage);
};



const mapStateToProps = ({products, filter}) => {
    const categoriesRelationship = getCategoryProductRelationsByCatSlug( products.items.categoriesRelationship );

    const visibleProducts = getVisibleProducts(
        products.items.productsList,
        filter.filterShopBy,
        categoriesRelationship
    );

    const sortedProducts = sortBy(
        visibleProducts,
        filter.sortProductShopBy
    );

    /* START: Pagination */
    const perPage = 9;

    const currentPage = filter.page || 1;

    const paginatedProducts = getPaginatedProducts(
        sortedProducts,
        currentPage,
        perPage
    );

    const pager = getPager(
        visibleProducts && visibleProducts.length,
        currentPage,
        perPage
    );
    /* END: Pagination */

    return {
        productsList: paginatedProducts,
        categories: products.items.categories,
        categoriesRelationship: categoriesRelationship,
        isProductsReady: products.isProductsReady,
        filterBy: filter.filterShopBy,
        sortProductShopBy: filter.sortProductShopBy,
        pager: pager,
        currentPage: currentPage,
    }
};

const mapDispatchToProps = dispatch => ({
    setAllProducts: () => dispatch(setAllProducts()),
    setProducts: products => dispatch(setProducts(products)),
    setPagination: page => dispatch(setPagination(page)),
    setFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);