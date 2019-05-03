import {connect} from 'react-redux';
import Movietiphome from '../components/Movietiphome';
import {setSingleVideotipOnHomepage} from "../actions/videotips";

const mapStateToProps = ({videotips: {videotipSingleOnHomepage, isVideotipSingleOnHomepageLoading, isVideotipSingleOnHomepageReady, videotipSingleOnHomepageError}}) => ({
    videotipSingle: videotipSingleOnHomepage,
    isVideotipSingleLoading: isVideotipSingleOnHomepageLoading,
    isVideotipSingleReady: isVideotipSingleOnHomepageReady,
    videotipSingleError: videotipSingleOnHomepageError
});

const mapDispatchToProps = dispatch => ({
    setSingleVideotipOnHomepage: videotip => dispatch(setSingleVideotipOnHomepage(videotip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movietiphome);