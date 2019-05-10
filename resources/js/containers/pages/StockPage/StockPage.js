import StockPage from '../../../components/pages/StockPage/StockPage';
import {setAllStocks} from "../../../actions/stocks";
import {connect} from "react-redux";

const mapStateToProps = (state) => {

    const {isStocksReady, isStocksLoading, stocksErrors, stocksData: {stocksList, stockAttachment}} = state.stocks;
    const {itemsBySlag, isPagesReady} = state.pages;
    return {
        isStocksReady,
        isStocksLoading,
        stocksErrors,
        stocksList,
        stockAttachment,
        pages: isPagesReady && itemsBySlag,
        isPagesReady,
    };
};

const mapDispatchToProps = dispatch => ({
    setAllStocks: () => dispatch(setAllStocks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);