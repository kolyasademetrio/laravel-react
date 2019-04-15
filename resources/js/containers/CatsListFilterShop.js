import {showProductsByCategory} from "../actions/filter";
import {connect} from "react-redux";
import {getCategoryProductRelationsByCatSlug} from '../helpers/getCategoryProductRelations';
import CatsListFilterShop from '../components/CatsListFilterShop';

const mapStateToProps = ({filter, products}, ownProps) => {
    const categoriesRelationship = getCategoryProductRelationsByCatSlug( products.items.categoriesRelationship );

    return {
        filterBy: filter.filterShopBy,
        categoriesRelationship: categoriesRelationship,
        categoriesToShow: ownProps.categories.filter( catItem => categoriesRelationship[catItem.category_filter_by] !== undefined ),
    }
};

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(showProductsByCategory(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatsListFilterShop);