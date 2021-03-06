import {connect} from 'react-redux';
import {setProductCommentsBySlug, addProductComment, removeProductCommentById, } from '../../../actions/products';
import ProductTabs from '../../../components/pages/productSinglePage/ProductTabs';


const mapStateToProps = (state) => {
    const {commentsLength} = state.products.comments;
    const {
        product_description_tab_content, product_ingredients_tab_content, product_usage_tab_content, tab_bg
    } = state.products.product.product;
    
    return{
        commentsLength: commentsLength,
        tabBg: tab_bg,
        descr: product_description_tab_content,
        ingredients: product_ingredients_tab_content,
        usage: product_usage_tab_content,
    }
};

export default connect(mapStateToProps)(ProductTabs);