import React, {Fragment} from 'react';
import Separator from './Separator';
import BreadcrumbsItem from './BreadcrumbsItem';

const Breadcrumbs = ({children}) => {
    return (
        <div className="kama_breadcrumbs">
            {
                Array.isArray(children) ? (
                    children.map((child, index) => {
                        return (
                            <Fragment key={index}>
                                {child}
                                {(index < (children.length - 1)) && <Separator />}
                            </Fragment>
                        );
                    })
                ) : (
                    children
                )
            }
        </div>

    );
};

export default Breadcrumbs;