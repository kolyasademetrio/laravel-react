import {connect} from 'react-redux';
import {setProductComments} from '../../../../actions/products';
import ProductTabs from '../../../../components/pages/productSinglePage/ProductTabs/ProductTabs';



const mapStateToProps = (state, ownProps) => {
    return{
        comments: state,
        test: state,
    }
};

const mapDispatchToProps = dispatch => ({
    setProductComments: comments => dispatch(setProductComments(comments))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTabs);