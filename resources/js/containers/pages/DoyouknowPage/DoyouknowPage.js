import DoyouknowPage from '../../../components/pages/DoyouknowPage/DoyouknowPage';
import {setAllDoyouknows} from "../../../actions/doyouknows";
import {connect} from "react-redux";


const mapStateToProps = ({doyouknows: {isDoyouknowsReady, isDoyouknowsLoading, doyouknowsErrors, doyouknowsData: {doyouknowsList, doyouknowsAttachment}}}) => {
    return {
        isDoyouknowsReady,
        isDoyouknowsLoading,
        doyouknowsErrors,
        doyouknowsList,
        doyouknowsAttachment
    };
};

const mapDispatchToProps = dispatch => ({
    setAllDoyouknows: () => dispatch(setAllDoyouknows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoyouknowPage);