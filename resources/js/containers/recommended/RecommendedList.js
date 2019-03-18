import {connect} from "react-redux";
import RecommendedList from '../../components/recomended/RecommendedList';



const mapStateToProps = ({filter}, ownProps) => ({
    filterBy: filter.filterBy,
    productsRecommended: ownProps.productsList && ownProps.productsList.filter(product => product.is_reccomended == 1)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedList);