import {connect} from 'react-redux';
import AboutPage from '../../components/pages/AboutPage';


const mapStateToProps = state => {
    const {itemsBySlag, isPagesReady} = state.pages;
    return {
        pages: isPagesReady && itemsBySlag,
        isPagesReady,
    };
};

export default connect(mapStateToProps)(AboutPage);