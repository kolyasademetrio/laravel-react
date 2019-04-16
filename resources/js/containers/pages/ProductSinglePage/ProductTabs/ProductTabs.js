import {connect} from 'react-redux';
import {setProductComments} from '../../../../actions/products';
import ProductTabs from '../../../../components/pages/productSinglePage/ProductTabs/ProductTabs';



const mapStateToProps = (state, ownProps) => {
    
    console.log( 'ownProps', ownProps );
    
    return{
    comments: state
}};

const mapDispatchToProps = dispatch => ({
    setProductComments: comments => dispatch(setProductComments(comments))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTabs);