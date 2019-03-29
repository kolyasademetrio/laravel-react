import {connect} from 'react-redux';
import {setProductSingle} from '../../actions/products';
import ProductSinglePage from '../../components/pages/ProductSinglePage';



const mapStateToProps = ({product,isSingleReady}) => ({
    product,
    isSingleReady,
});

const mapDispatchToProps = dispatch => ({
    setProductSingle: product => dispatch(setProductSingle(product)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductSinglePage);