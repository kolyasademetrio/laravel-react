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

        axios.get('/api/products').then(({data}) => {
            this.setState({
                slugsProducts: data.productsList,
            });

            const slugsProductsNames = {};
            data.productsList.forEach((elem, index) => {
                var slugEl = elem.id;
                slugsProductsNames[slugEl] = elem.title;
            });

            this.setState({
                slugsProductsNames: slugsProductsNames,
            });
        });
    }

    render(){
        const slugsNames = this.state && this.state.slugsNames;
        const slugsProductsNames = this.state && this.state.slugsProductsNames;

        return (
            <BreadcrumbsComp slugsNames={slugsNames} slugsProductsNames={slugsProductsNames} />
        );
    }
}

export default Breadcrumbs;

export const BreadcrumbsComp = props => {

    const allSlugsNames = {...props.slugsNames, ...props.slugsProductsNames};

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
                            {
                                parts.map((part, partIndex, parts) => {
                                    const path = ['', ...parts.slice(0, partIndex+1)].join("/");
/*                                    console.log( 'path', path );
                                    console.log( 'part', part );
                                    console.log( 'slugsNames', slugsNames );*/

                                    return (
                                        <i key={part}>
                                            {<span className="kb_sep"> / </span>}
                                            <Link key={path} to={path} >{allSlugsNames && allSlugsNames[part]}</Link>
                                        </i>
                                    );
                                })
                            }
                            {<span className="kb_sep"> / </span>}
                            {allSlugsNames && allSlugsNames[place]}
                        </div>
                    );
                }
            }
        />);
};

