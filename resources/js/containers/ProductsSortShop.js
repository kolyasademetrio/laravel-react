import {connect} from 'react-redux';
import {setFilterProductsShop} from '../actions/filter';
import ProductsSortShop from '../components/ProductsSortShop';



const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilterProductsShop(filter)),
});

export default connect(null, mapDispatchToProps)(ProductsSortShop);