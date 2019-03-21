import {connect} from 'react-redux';
import {setProducts} from '../../actions/products';
import {setFilter} from '../../actions/filter';

import getCategoryProductRelations from '../../helpers/getCategoryProductRelations';
import ShopPage from '../../components/pages/ShopPage';

const sortByPriceAsc = products => {
    products.sort((a, b) => (a.regular_price - b.regular_price))
}

const sortByPriceDesc = products => {
    products.sort((a, b) => (b.regular_price - a.regular_price))
}

const getVisibleProducts = (productsList, filterBy, filterProductBy, catsRelation) => {

    if (filterBy == "all") {
        const productsListVisible = productsList;
    } else {
        const productIDs = catsRelation[filterBy] ? catsRelation[filterBy] : [];

        const productsListVisible = productsList.filter(item => (productIDs.includes(item.id)));
    }

    console.log( productsListVisible );

    /*switch(filterProductBy){
        case 'price_asc':
            return sortByPriceAsc(productsListVisible)
            break;
        case 'price_desc':
            return sortByPriceDesc(productsListVisible)
            break;
    }*/
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