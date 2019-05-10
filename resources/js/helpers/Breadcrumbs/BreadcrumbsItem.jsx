import React from 'react';
import {NavLink} from "react-router-dom";

const BreadcrumbsItem = ({path, title}) => {
    return (
        <NavLink to={path}>{title}</NavLink>
    );
};

export default BreadcrumbsItem