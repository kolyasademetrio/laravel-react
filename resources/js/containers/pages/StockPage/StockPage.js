import StockPage from '../../../components/pages/StockPage/StockPage';
import {setAllStocks} from "../../../actions/stocks";
import {connect} from "react-redux";

const mapStateToProps = ({stocks: {isStocksReady, isStocksLoading, stocksErrors, stocksData: {stocksList, stockAttachment}}}) => {
    return {
        isStocksReady,
        isStocksLoading,
        stocksErrors,
        stocksList,
        stockAttachment
    };
};

const mapDispatchToProps = dispatch => ({
    setAllStocks: slug => dispatch(setAllStocks(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);