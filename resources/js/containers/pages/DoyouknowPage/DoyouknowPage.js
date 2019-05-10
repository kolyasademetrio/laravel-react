import DoyouknowPage from '../../../components/pages/DoyouknowPage/DoyouknowPage';
import {setAllDoyouknows} from "../../../actions/doyouknows";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    const {isDoyouknowsReady, isDoyouknowsLoading, doyouknowsErrors} = state.doyouknows;
    const {doyouknowsList, doyouknowsAttachment} = state.doyouknows.doyouknowsData;
    const {itemsBySlag, isPagesReady} = state.pages;

    return {
        isDoyouknowsReady,
        isDoyouknowsLoading,
        doyouknowsErrors,
        doyouknowsList,
        doyouknowsAttachment,
        pages: isPagesReady && itemsBySlag,
        isPagesReady,
    };
};

const mapDispatchToProps = dispatch => ({
    setAllDoyouknows: () => dispatch(setAllDoyouknows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoyouknowPage);