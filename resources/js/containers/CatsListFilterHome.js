import {setFilter} from "../actions/filter";
import {connect} from "react-redux";
import CatsListFilterHome from '../components/CatsListFilterHome';



const mapStateToProps = ({filter}, ownProps) => ({
    filterBy: filter.filterBy,
    categoriesToShow: ownProps.categories.filter(category => category.show_on_homepage == 1),
});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatsListFilterHome);