import {connect} from 'react-redux';
import {setProductBySlug} from '../../../actions/products';
import ProductSinglePage from '../../../components/pages/productSinglePage/ProductSinglePage';



const mapStateToProps = (state) => {

const {isSingleReady, isSingleLoading, error} = state.products;
const {product, productAttachments} = state.products.product;

return {
    product: product,
    productAttachments: productAttachments,
    isSingleLoading,
    isSingleReady,
    error,
}};

const mapDispatchToProps = dispatch => ({
    setProductBySlug: slug => dispatch(setProductBySlug(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSinglePage);