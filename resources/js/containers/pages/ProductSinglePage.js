import {connect} from 'react-redux';
import {setProductSingle} from '../../actions/products';
import ProductSinglePage from '../../components/pages/productSinglePage/ProductSinglePage';



const mapStateToProps = (state) => {

const {product, isSingleReady} = state.products;

const product1 = product.product;

return {
    product: product1,
    isSingleReady,
}};

const mapDispatchToProps = dispatch => ({
    setProductSingle: product => dispatch(setProductSingle(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSinglePage);