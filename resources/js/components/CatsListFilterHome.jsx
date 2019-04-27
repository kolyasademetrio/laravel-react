import React from 'react';

const CatsListFilterHome = ({categoriesToShow: categories, setFilter, filterBy}) => {
    const catFilterBy = filterBy ? filterBy : (categories && categories[0].category_filter_by);
    
    return (
        <div className="recommended__cats">
            <ul className="recommended__categoryList">
                {
                    categories.map((cat, index) => {
                        const activeClassName = catFilterBy === cat.category_filter_by ? 'active' : '';
                        return (
                            <li key={`category-key-${index}`} className="recommended__categoryItem">
                                <span
                                    className={`recommended__categoryItemLink ${activeClassName}`}
                                    onClick={setFilter.bind(this, cat.category_filter_by)}
                                >
                                    {cat.category_name}
                                </span>
                            </li>
                        );

                    })
                }
            </ul>
        </div>
    );
};

export default CatsListFilterHome;