import {connect} from "react-redux";
import RecommendedList from '../../components/recomended/RecommendedList';

/*const getVisibleProducts = (products, filterBy) => {
    switch(filterBy){
        case
    }
}*/

const mapStateToProps = ({filter}, ownProps) => ({
    filterBy: filter.filterBy,
    productsRecommended: ownProps.productsList && ownProps.productsList.filter(product => product.is_reccomended == 1),
    /*categories: ownProps.categories,
    categoriesRelationship: ownProps.categoriesRelationship,*/
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedList);