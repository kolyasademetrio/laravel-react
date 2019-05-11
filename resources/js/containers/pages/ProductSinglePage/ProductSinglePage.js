import {connect} from 'react-redux';
import {setProductBySlug} from '../../../actions/products';
import ProductSinglePage from '../../../components/pages/productSinglePage/ProductSinglePage';
import {sortArrayByKey} from '../../../helpers/sortArrayByKey';


const mapStateToProps = state => {
    const {product, categoriesRelationship} = state.products.product;
    const {isSingleReady, isSingleLoading, singleProductError} = state.products;
    const {id, title} = isSingleReady && product;

    const {itemsBySlag, isPagesReady} = state.pages;
    const category = sortArrayByKey(categoriesRelationship, 'productID');

    return {
        id,
        title,
        isSingleLoading,
        isSingleReady,
        error: singleProductError,
        pages: isPagesReady && itemsBySlag,
        isPagesReady,
        categoryName: category[id] && category[id][0]["categoryName"],
    };
};

const mapDispatchToProps = dispatch => ({
    setProductBySlug: slug => dispatch(setProductBySlug(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSinglePage);