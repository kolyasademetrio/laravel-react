import {setSingleDoyouknow} from "../../../actions/doyouknows";
import {connect} from "react-redux";
import DoyouknowSinglePage from "../../../components/pages/DoyouknowPage/DoyouknowSinglePage";

const mapStateToProps = (state) =>{
    const {doyouknows: {
        isDoyouknowSingleLoading,
        isDoyouknowSingleReady,
        doyouknowSingleErrors,
        doyouknowSingleData
    }} = state;
    const {item, attachments} = doyouknowSingleData;
    const {pages: {items, isPagesReady}} = state;

    return {
        isDoyouknowSingleLoading,
        isDoyouknowSingleReady,
        doyouknowSingleErrors,
        item,
        attachments,
        pages: isPagesReady && items,
    };
};

const mapDispatchToProps = dispatch => ({
    setSingleDoyouknow: slug => dispatch(setSingleDoyouknow(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoyouknowSinglePage);