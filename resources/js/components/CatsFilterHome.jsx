import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions/filter';

const CatsFilterHome = ({categoriesToShow, setFilter, filterBy}) => {
    
    const categoryFilterBy = filterBy ? filterBy : (categoriesToShow && categoriesToShow[0]['category_filter_by']);

    console.log( categoryFilterBy );
    
    return (
        <div className="recommended__cats">
            <ul className="recommended__categoryList">
                {
                    categoriesToShow && categoriesToShow.map((categoryItem, index) => (
                        <li key={'category-key-' + index} className="recommended__categoryItem">
                            <span
                                className={'recommended__categoryItemLink' + (categoryFilterBy === categoryItem['category_filter_by'] ? ' active' : '')}
                                onClick={setFilter.bind(this, categoryItem['category_filter_by'])}
                            >
                                {categoryItem['category_name']}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );

};

const mapStateToProps = ({filter}) => ({
    filterBy: filter.filterBy,
});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatsFilterHome);