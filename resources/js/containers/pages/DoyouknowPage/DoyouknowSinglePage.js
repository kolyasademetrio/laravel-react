import {setSingleDoyouknow} from "../../../actions/doyouknows";
import {connect} from "react-redux";
import DoyouknowSinglePage from "../../../components/pages/DoyouknowPage/DoyouknowSinglePage";


const mapStateToProps = ({doyouknows: {isDoyouknowSingleLoading, isDoyouknowSingleReady, doyouknowSingleErrors, doyouknowSingleData: {item, attachments}}}) =>{
    return {
        isDoyouknowSingleLoading, isDoyouknowSingleReady, doyouknowSingleErrors, item, attachments
    };
};

const mapDispatchToProps = dispatch => ({
    setSingleDoyouknow: slug => dispatch(setSingleDoyouknow(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoyouknowSinglePage);