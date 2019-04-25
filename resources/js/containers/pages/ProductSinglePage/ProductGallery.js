import {connect} from 'react-redux';
import ProductGallery from '../../../components/pages/productSinglePage/ProductGallery';

const mapStateToProps = (state) => {
    const {productAttachments} = state.products.product;
    return {
        productAttachments,
        hasGalleryNav: productAttachments.length > 1 ? true : false,
    };
};

export default connect(mapStateToProps)(ProductGallery);