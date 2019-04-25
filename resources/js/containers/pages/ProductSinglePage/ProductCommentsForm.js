import {connect} from 'react-redux';
import ProductCommentsForm from '../../../components/pages/productSinglePage/ProductCommentsForm';

const mapStateToProps = state => {
    const {commentsLength, userName, userEmail} = state.products.comments;
    const {title} = state.products.product.product;
    return {
        commentsLength: commentsLength,
        userName: userName,
        userEmail: userEmail,
        title: title,
    };
};

export default connect(mapStateToProps)(ProductCommentsForm);