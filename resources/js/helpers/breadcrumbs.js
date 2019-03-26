import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

class Breadcrumbs extends Component {

    componentDidMount(){
        axios.get('/api/pages').then(({data}) => {
            console.log( data );
        });
    }

    render(){
        return (
            <BreadcrumbsComp />
        );
    }
}

export default Breadcrumbs;

export const BreadcrumbsComp = () => (
    <Route
        path="*"
        render={
            props => {

                let parts = props.location.pathname.split("/");

                const place = parts[parts.length-1];

                parts = parts.slice(1, parts.length-1);

                return (
                    <div className="kama_breadcrumbs">
                        {<Link to={'/'} >Главная</Link>}
                        {parts.map(crumb)}
                        {<span className="kb_sep"> / </span>}
                        {place}
                    </div>
                );
            }
        }
    />
);

const crumb = (part, partIndex, parts) => {
    const path = ['', ...parts.slice(0, partIndex+1)].join("/");
    return (
        <Link key={path} to={path} >{part}</Link>
    );
};

