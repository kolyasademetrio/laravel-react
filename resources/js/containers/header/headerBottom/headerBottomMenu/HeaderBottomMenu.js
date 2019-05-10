import HeaderBottomMenu from '../../../../components/header/headerBottom/headerBottomMenu/HeaderBottomMenu';
import {setAllPages} from "../../../../actions/pages";
import {connect} from 'react-redux';




const mapStateToProps = ({pages}) => ({
    pages
});

const mapDispatchToProps = dispatch => ({
    setAllPages: () => dispatch(setAllPages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBottomMenu);