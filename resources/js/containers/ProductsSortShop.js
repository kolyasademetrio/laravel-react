import {connect} from 'react-redux';
import {sortProduct} from '../actions/filter';
import ProductsSortShop from '../components/ProductsSortShop';



const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(sortProduct(filter)),
});

export default connect(null, mapDispatchToProps)(ProductsSortShop);