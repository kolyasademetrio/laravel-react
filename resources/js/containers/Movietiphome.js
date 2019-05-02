import {connect} from 'react-redux';
import Movietiphome from '../components/Movietiphome';
import {setSingleVideotip} from "../actions/videotips";

const mapStateToProps = ({videotips: {videotipSingle, isVideotipSingleLoading, isVideotipSingleReady, videotipSingleError}}) => ({
    videotipSingle,
    isVideotipSingleLoading,
    isVideotipSingleReady,
    videotipSingleError
});

const mapDispatchToProps = dispatch => ({
    setSingleVideotip: videotip => dispatch(setSingleVideotip(videotip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movietiphome);