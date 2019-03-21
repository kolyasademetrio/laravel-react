import {setFilterShop as setFilter} from "../actions/filter";
import {connect} from "react-redux";
import getCategoryProductRelations from '../helpers/getCategoryProductRelations';
import CatsFilterShop from '../components/CatsFilterShop';

const mapStateToProps = ({filter, products}, ownProps) => {
    const categoriesRelationship = getCategoryProductRelations( products.items.categoriesRelationship );

    return {
        filterBy: filter.filterShopBy,
        categoriesToShow: ownProps.categories.filter( catItem => categoriesRelationship[catItem.category_filter_by] !== undefined ),
        categoriesRelationship: categoriesRelationship,
    }
};

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatsFilterShop);