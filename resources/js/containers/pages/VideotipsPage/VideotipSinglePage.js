import {connect} from 'react-redux';
import VideotipSinglePage from '../../../components/pages/VideotipsPage/VideotipSinglePage';
import {setSingleVideotip} from '../../../actions/videotips';


const mapStateToProps = ({videotips: {videotipSingle}}) => ({
    videotipSingle
});

const mapDispatchToProps = dispatch => ({
    setSingleVideotip: slug => dispatch(setSingleVideotip(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideotipSinglePage);