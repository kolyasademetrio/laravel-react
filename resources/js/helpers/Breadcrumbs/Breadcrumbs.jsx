import React from 'react';
import BreadcrumbsItem from './BreadcrumbsItem';

const Breadcrumbs = (props) => {
    console.log( 'props.children', props.children );
    
    return (
        <div className="kama_breadcrumbs">
            {
                props.children

                /*children.map((item, i) => (
                    <BreadcrumbsItem
                        key={i}
                        path={item.path}
                        title={item.title}
                    />
                ))*/
            }
        </div>

    );
};

export default Breadcrumbs;