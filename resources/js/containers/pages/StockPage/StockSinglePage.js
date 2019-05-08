import StockSinglePage from '../../../components/pages/StockPage/StockSinglePage';
import {setSingleStock} from "../../../actions/stocks";
import {connect} from "react-redux";


const mapStateToProps = ({stocks: {isStockSingleLoading, isStockSingleReady, stockSingleErrors, stockSingleData: {item, attachments}}}) =>{
    return {
        isStockSingleLoading, isStockSingleReady, stockSingleErrors, item, attachments
    };
};

const mapDispatchToProps = dispatch => ({
    setSingleStock: slug => dispatch(setSingleStock(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockSinglePage);