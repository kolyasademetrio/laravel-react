import {connect} from "react-redux";
import {setAllProducts} from '../../actions/products';
import RecommendedList from '../../components/recomended/RecommendedList';
import {getCategoryProductRelationsByCatSlug} from '../../helpers/getCategoryProductRelations';


const getVisibleProducts = (productsRecommended, filterBy, catsRelation, categories) => {
    const catFilterBy = filterBy ? filterBy : (categories && categories[0].category_filter_by);

    const productIDs = catsRelation[catFilterBy] ? catsRelation[catFilterBy] : [];

    return productsRecommended && productsRecommended.filter(item => productIDs.includes(item.id));
}

const mapStateToProps = (state) => {
    
    const {filterBy} = state.filter;

    const {isProductsReady, isProductsLoading} = state.products;

    const {productsList, categories, categoriesRelationship} = state.products.items;

    const productsRecommended = productsList && productsList.filter(product => product.is_reccomended == 1);

    const categoriesRelation = getCategoryProductRelationsByCatSlug(categoriesRelationship);

    return {
        isProductsReady,
        isProductsLoading,
        productsRecommended: getVisibleProducts(
            productsRecommended,
            filterBy,
            categoriesRelation,
            categories
        ),
    }
};

const mapDispatchToProps = dispatch => ({
    setAllProducts: () => dispatch(setAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedList);