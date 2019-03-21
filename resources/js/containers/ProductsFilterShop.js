import {connect} from 'react-redux';
import {setFilterProductsShop} from '../actions/filter';
import ProductsFilterShop from '../components/ProductsFilterShop';



const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilterProductsShop(filter)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductsFilterShop);