import StockSinglePage from '../../../components/pages/StockPage/StockSinglePage';
import {setSingleStock} from "../../../actions/stocks";
import {connect} from "react-redux";


const mapStateToProps = (state) =>{
    const {
        isStockSingleLoading,
        isStockSingleReady,
        stockSingleErrors,
        stockSingleData: {item, attachments},
    } = state.stocks;

    const {itemsBySlag, isPagesReady} = state.pages;

    return {
        isStockSingleLoading,
        isStockSingleReady,
        stockSingleErrors,
        item,
        attachments,
        pages: isPagesReady && itemsBySlag,
        isPagesReady,
    };
};

const mapDispatchToProps = dispatch => ({
    setSingleStock: slug => dispatch(setSingleStock(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockSinglePage);