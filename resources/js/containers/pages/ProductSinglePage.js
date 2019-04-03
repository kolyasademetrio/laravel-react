import {connect} from 'react-redux';
import {setProductSingle} from '../../actions/products';
import ProductSinglePage from '../../components/pages/productSinglePage/ProductSinglePage';



const mapStateToProps = (state) => {

const {isSingleReady} = state.products;
const {product, productAttachments} = state.products.product;

return {
    product: product,
    productAttachments: productAttachments,
    isSingleReady,
}};

const mapDispatchToProps = dispatch => ({
    setProductSingle: product => dispatch(setProductSingle(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSinglePage);