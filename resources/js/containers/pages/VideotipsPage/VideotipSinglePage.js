import VideotipSinglePage from '../../../components/pages/VideotipsPage/VideotipSinglePage';
import {setSingleVideotip} from '../../../actions/videotips';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    const {videotipSingle, isVideotipSingleLoading, isVideotipSingleReady, videotipSingleError} = state.videotips;
    const {itemsBySlag, isPagesReady} = state.pages;

    return {
        videotipSingle,
        isVideotipSingleLoading,
        isVideotipSingleReady,
        videotipSingleError,
        pages: isPagesReady && itemsBySlag,
        isPagesReady,
    }
};

const mapDispatchToProps = dispatch => ({
    setSingleVideotip: slug => dispatch(setSingleVideotip(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideotipSinglePage);