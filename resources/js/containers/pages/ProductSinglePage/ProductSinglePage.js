import {connect} from 'react-redux';
import {setProductSingle, fetchProductData} from '../../../actions/products';
import ProductSinglePage from '../../../components/pages/productSinglePage/ProductSinglePage';



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
    fetchProductData: url => dispatch(fetchProductData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSinglePage);