import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {getCategoryProductRelationsByProductSlug} from '../helpers/getCategoryProductRelations';

class Breadcrumbs extends Component {

    componentDidMount(){
        axios.get('/api/pages').then(({data}) => {
            const slugsPagesNames = {};
            data.forEach((elem, index) => {
                var slugEl = elem.slug;
                slugsPagesNames[slugEl] = elem.title;
            });

            this.setState({
                slugsPagesNames: slugsPagesNames,
            });
        });

        axios.get('/api/products').then(({data}) => {
            
            //console.log( 'data', data );
            
            const slugsProductsNames = {};
            data.productsList.forEach((elem, index) => {
                var slugEl = elem.slug;
                slugsProductsNames[slugEl] = elem.title;
            });

            const slugsProductCats = getCategoryProductRelationsByProductSlug(data.categoriesRelationship);
            
            this.setState({
                slugsProductsNames: slugsProductsNames,
                slugsProductCats: slugsProductCats,
            });
        });
    }

    render(){
        return (
            <BreadcrumbsComp
                slugsPagesNames={this.state && this.state.slugsPagesNames}
                slugsProductsNames={this.state && this.state.slugsProductsNames}
                slugsProductCats={this.state && this.state.slugsProductCats}
            />
        );
    }
}

export default Breadcrumbs;

export const BreadcrumbsComp = props => {

    const allSlugsNames = {...props.slugsPagesNames, ...props.slugsProductsNames, ...props.slugsProductCats};
    
    //console.log( 'allSlugsNames', allSlugsNames );

    return (
        <Route
            path="*"
            render={ props => {

                    let parts = props.location.pathname.split("/");
                    
                    const place = parts[parts.length - 1];

                    parts = parts.slice(1, parts.length - 1);
                    
                    console.log( parts );

                    return (
                        <div className="kama_breadcrumbs">
                            {<Link to={'/'}>Главная</Link>}
                            {/*{<Link to={'/'}>allSlugsNames[]</Link>}*/}
                            {
                                parts.map((part, partIndex, parts) => {
                                    const path = ['', ...parts.slice(0, partIndex+1)].join("/");
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

