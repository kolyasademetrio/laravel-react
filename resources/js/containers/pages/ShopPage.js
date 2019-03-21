import {connect} from 'react-redux';
import {setProducts} from '../../actions/products';
import {setFilter} from '../../actions/filter';

import getCategoryProductRelations from '../../helpers/getCategoryProductRelations';
import ShopPage from '../../components/pages/ShopPage';



const getVisibleProducts = (productsList, filterBy, catsRelation) => {

    if (filterBy == "all") return productsList;

    const productIDs = catsRelation[filterBy] ? catsRelation[filterBy] : [];

    return productsList.filter(item => (productIDs.includes(item.id)));
}

const mapStateToProps = ({products, filter}) => ({
    productsList: getVisibleProducts(
        products.items.productsList,
        filter.filterShopBy,
        getCategoryProductRelations( products.items.categoriesRelationship )
    ),
    categories: products.items.categories,
    categoriesRelationship: getCategoryProductRelations( products.items.categoriesRelationship ),
    isReady: products.isReady,
    filterBy: filter.filterShopBy,
});

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products)),
    setFilter
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);