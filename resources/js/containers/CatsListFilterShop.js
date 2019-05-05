import {connect} from "react-redux";
import {showProductsByCategory} from "../actions/filter";
import CatsListFilterShop from '../components/CatsListFilterShop';
import {getCategoryProductRelationsByCatSlug} from '../helpers/getCategoryProductRelations';


const mapStateToProps = ({filter, products}) => {
    const {categories} = products.items;
    const categoriesRelationship = getCategoryProductRelationsByCatSlug( products.items.categoriesRelationship );
    
    console.log( 'first', products.items.categoriesRelationship );
    console.log( 'second', categoriesRelationship );

    return {
        filterBy: filter.filterShopBy,
        categoriesRelationship: categoriesRelationship,
        categoriesToShow: categories.filter( catItem => categoriesRelationship[catItem.category_filter_by] !== undefined ),
    }
};

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(showProductsByCategory(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatsListFilterShop);