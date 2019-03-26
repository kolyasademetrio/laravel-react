import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

class Breadcrumbs extends Component {

    componentDidMount(){
        axios.get('/api/pages').then(({data}) => {
            this.setState({
                slugs: data
            });

            const slugsNames = {};
            data.forEach((elem, index) => {
                var slugEl = elem.slug;
                slugsNames[slugEl] = elem.title;
            });

            this.setState({
                slugsNames: slugsNames,
            });
        });
    }

    render(){
        const slugsNames = this.state && this.state.slugsNames;

        return (
            <BreadcrumbsComp slugsNames={slugsNames} />
        );
    }
}

export default Breadcrumbs;

export const BreadcrumbsComp = props => {

    const {slugsNames} = props;

    return (
        <Route
            path="*"
            render={
                props => {

                    let parts = props.location.pathname.split("/");

                    const place = parts[parts.length - 1];

                    parts = parts.slice(1, parts.length - 1);

                    return (
                        <div className="kama_breadcrumbs">
                            {<Link to={'/'}>Главная</Link>}
                            {parts.map(crumb)}
                            {<span className="kb_sep"> / </span>}
                            {slugsNames && slugsNames[place]}
                        </div>
                    );
                }
            }
        />);
};

const crumb = (part, partIndex, parts) => {
    const path = ['', ...parts.slice(0, partIndex+1)].join("/");
    return (
        <Link key={path} to={path} >{part}</Link>
    );
};

