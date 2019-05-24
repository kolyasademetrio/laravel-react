import {setFilter} from "../actions/filter";
import {connect} from "react-redux";
import CatsListFilterHome from '../components/CatsListFilterHome';

import {sortArrayByKey} from '../helpers/sortArrayByKey';


const mapStateToProps = state => {
    const {filterBy} = state.filter;
    const {categories, categoriesRelationship} = state.products.items;

    const relationsSorted = sortArrayByKey(categoriesRelationship, 'categoryName');
    const categoriesSorted = categories.filter(category => relationsSorted[category['category_name']]);

    return {
        filterBy,
        categoriesToShow: categoriesSorted.filter(category => category.show_on_homepage == 1),
    };
};

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatsListFilterHome);