import {setSingleDoyouknow} from "../../../actions/doyouknows";
import {connect} from "react-redux";
import DoyouknowSinglePage from "../../../components/pages/DoyouknowPage/DoyouknowSinglePage";

const mapStateToProps = (state) =>{
    const {
        isDoyouknowSingleLoading,
        isDoyouknowSingleReady,
        doyouknowSingleErrors,
        doyouknowSingleData: {item, attachments},
    } = state.doyouknows;

    const {itemsBySlag, isPagesReady} = state.pages;

    return {
        isDoyouknowSingleLoading,
        isDoyouknowSingleReady,
        doyouknowSingleErrors,
        item,
        attachments,
        pages: isPagesReady && itemsBySlag,
        isPagesReady,
    };
};

const mapDispatchToProps = dispatch => ({
    setSingleDoyouknow: slug => dispatch(setSingleDoyouknow(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoyouknowSinglePage);