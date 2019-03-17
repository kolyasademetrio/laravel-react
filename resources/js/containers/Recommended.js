import {connect} from 'react-redux';
import {setProducts} from '../actions/products';
import {setFilter} from '../actions/filter';
import Recommended from '../components/recomended/Recommended';

const mapStateToProps = ({ products }) => ({
    products: products.items,
    isReady: products.isReady,
});

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products)),
    setFilter:   filter   => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recommended);