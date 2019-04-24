import {connect} from 'react-redux';
import {setProductCommentsBySlug, addProductComment, removeProductCommentById, } from '../../../../actions/products';
import ProductTabs from '../../../../components/pages/productSinglePage/ProductTabs/ProductTabs';


const mapStateToProps = (state) => {

    const {userID, allUsers, allComments, commentsLength, userLogo, userName, userEmail} = state.products.comments;
    const {slug, id} = state.products.product.product;
    
    return{
        userID: userID,
        productSlug: slug,
        productID: id,
        users: allUsers,
        comments: allComments,
        commentsLength: commentsLength,
        userLogo: userLogo,

        userName: userName,
        userEmail: userEmail,
    }
};

const mapDispatchToProps = dispatch => ({
    setProductCommentsBySlug: slug => dispatch(setProductCommentsBySlug(slug)),
    addProductComment: id => dispatch(addProductComment(id)),
    removeProductCommentById: id => dispatch(removeProductCommentById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTabs);