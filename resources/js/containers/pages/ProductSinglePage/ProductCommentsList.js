import {connect} from 'react-redux';
import {removeProductCommentById} from '../../../actions/products';
import ProductCommentsList from '../../../components/pages/productSinglePage/ProductCommentsList';


const mapStateToProps = state => {
    const {allUsers, allComments, commentsLength} = state.products.comments;
    return {
        users: allUsers,
        comments: allComments,
        commentsLength: commentsLength,
    };
};

const mapDispatchToProps = dispatch => ({
    removeProductCommentById: id => dispatch(removeProductCommentById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCommentsList);