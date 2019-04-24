import {connect} from 'react-redux';
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

});

export default connect(mapStateToProps)(ProductCommentsList);