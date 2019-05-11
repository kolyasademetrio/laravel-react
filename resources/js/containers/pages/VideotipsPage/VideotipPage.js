import VideotipsPage from '../../../components/pages/VideotipsPage/VideotipsPage';
import {setAllVideotips} from '../../../actions/videotips';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    const {videotipsList, isVideotipsLoading, isVideotipsReady, videotipsError} = state.videotips;
    const {itemsBySlag, isPagesReady} = state.pages;

    return {
        videotipsList,
        isVideotipsLoading,
        isVideotipsReady,
        videotipsError,
        pages: isPagesReady && itemsBySlag,
        isPagesReady,
    }
};

const mapDispatchToProps = dispatch => ({
    setAllVideotips: videotips => dispatch(setAllVideotips(videotips)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideotipsPage);