import {connect} from 'react-redux';
import {setProducts} from '../../actions/products';
import {setFilter} from '../../actions/filter';

import getCategoryProductRelations from '../../helpers/getCategoryProductRelations';
import ShopPage from '../../components/pages/ShopPage';



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

const mapStateToProps = ({products, filter}) => ({
    productsList: getVisibleProducts(
        products.items.productsList,
        filter.filterShopBy,
        filter.filterProductShopBy,
        getCategoryProductRelations( products.items.categoriesRelationship )
    ),
    categories: products.items.categories,
    categoriesRelationship: getCategoryProductRelations( products.items.categoriesRelationship ),
    isReady: products.isReady,
    filterBy: filter.filterShopBy,
    filterProductShopBy: filter.filterProductShopBy,
});

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products)),
    setFilter
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);