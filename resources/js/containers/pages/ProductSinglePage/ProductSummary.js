import {connect} from 'react-redux';
import ProductSummary from "../../../components/pages/productSinglePage/ProductSummary";


const mapStateToProps = (state) => {
    const {title, excerpt, descr, regular_price, sale_price, currency} = state.products.product.product;
    return {
        title,
        excerpt,
        descr,
        regular_price,
        sale_price,
        currency,
        hasSalePrice: (sale_price == 0) ? false : true,
    };
};

export default connect(mapStateToProps)(ProductSummary);