import {connect} from 'react-redux';
import {setProductComments} from '../../../../actions/products';
import ProductTabs from '../../../../components/pages/productSinglePage/ProductTabs/ProductTabs';



const mapStateToProps = state => {

    console.log( state );

    return {
        comments: state.products.comments
    };
};

const mapDispatchToProps = dispatch => ({
    setProductComments
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTabs);