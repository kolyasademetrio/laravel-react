import {connect} from 'react-redux';
import {setProductComments, removeProductCommentById} from '../../../../actions/products';
import ProductTabs from '../../../../components/pages/productSinglePage/ProductTabs/ProductTabs';



const mapStateToProps = (state) => {
    return{
        comments: state,
    }
};

const mapDispatchToProps = dispatch => ({
    setProductComments: comments => dispatch(setProductComments(comments)),
    removeProductCommentById: id => dispatch(removeProductCommentById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTabs);