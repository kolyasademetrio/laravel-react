import VideotipPage from '../../../components/pages/VideotipsPage/VideotipPage';
import {setAllVideotips} from '../../../actions/videotips';
import {connect} from 'react-redux';


const mapStateToProps = ({videotips}) => {
    const {videotipsList, isVideotipsLoading, isVideotipsReady, videotipsError} = videotips;
    return {
        videotipsList,
        isVideotipsLoading,
        isVideotipsReady,
        videotipsError,
    }
};

const mapDispatchToProps = dispatch => ({
    setAllVideotips: videotips => dispatch(setAllVideotips(videotips)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideotipPage);