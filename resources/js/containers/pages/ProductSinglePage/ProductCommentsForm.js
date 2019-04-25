import {connect} from 'react-redux';
import ProductCommentsForm from '../../../components/pages/productSinglePage/ProductCommentsForm';
import {addProductComment, setProductCommentsBySlug} from "../../../actions/products";


const mapStateToProps = (state) => {
    const {userID, commentsLength, userName, userEmail} = state.products.comments;
    const {slug, id, title} = state.products.product.product;

    return{
        productSlug: slug,
        userName: userName,
        userEmail: userEmail,
        productID: id,
        userID: userID,
        commentsLength: commentsLength,
        title: title,
    }
};

const mapDispatchToProps = dispatch => ({
    setProductCommentsBySlug: slug => dispatch(setProductCommentsBySlug(slug)),
    addProductComment: id => dispatch(addProductComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCommentsForm);