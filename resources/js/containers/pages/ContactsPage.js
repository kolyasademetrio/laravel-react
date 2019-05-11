import {connect} from 'react-redux';
import ContactsPage from '../../components/pages/ContactsPage';


const mapStateToProps = state => {
    const {itemsBySlag, isPagesReady} = state.pages;
    return {
        pages: isPagesReady && itemsBySlag,
        isPagesReady,
    };
};

export default connect(mapStateToProps)(ContactsPage);