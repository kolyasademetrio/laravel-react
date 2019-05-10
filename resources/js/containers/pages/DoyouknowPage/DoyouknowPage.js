import DoyouknowPage from '../../../components/pages/DoyouknowPage/DoyouknowPage';
import {setAllDoyouknows} from "../../../actions/doyouknows";
import {connect} from "react-redux";
import {reformatArrayBy} from '../../../helpers/reformatArrayBy';


const mapStateToProps = (state) => {
    const {isDoyouknowsReady, isDoyouknowsLoading, doyouknowsErrors} = state.doyouknows;
    const {doyouknowsList, doyouknowsAttachment} = state.doyouknows.doyouknowsData;
    const {items, isPagesReady} = state.pages;

    return {
        isDoyouknowsReady,
        isDoyouknowsLoading,
        doyouknowsErrors,
        doyouknowsList,
        doyouknowsAttachment,
        pages: isPagesReady && reformatArrayBy(items, 'slug'),
        isPagesReady,
    };
};

const mapDispatchToProps = dispatch => ({
    setAllDoyouknows: () => dispatch(setAllDoyouknows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoyouknowPage);