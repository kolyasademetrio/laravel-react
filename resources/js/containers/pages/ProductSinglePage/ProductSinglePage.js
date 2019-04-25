import {connect} from 'react-redux';
import {setProductBySlug} from '../../../actions/products';
import ProductSinglePage from '../../../components/pages/productSinglePage/ProductSinglePage';



const mapStateToProps = (state) => {
    const {product} = state.products.product;
    const id = product && product.id;
    const {isSingleReady, isSingleLoading, singleProductError} = state.products;

    return {
        id,
        isSingleLoading,
        isSingleReady,
        error: singleProductError,
    };
};

const mapDispatchToProps = dispatch => ({
    setProductBySlug: slug => dispatch(setProductBySlug(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSinglePage);