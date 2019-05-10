import React from 'react';
import {NavLink} from "react-router-dom";

const BreadcrumbsItem = ({path, title}) => {
    
    if ( path === '' ) {
        return <span className="kb_title">{title}</span>;
    }
    
    return (
        <NavLink to={path}>{title}</NavLink>
    );
};

export default BreadcrumbsItem