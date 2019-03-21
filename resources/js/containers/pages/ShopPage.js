import {connect} from 'react-redux';
import {setProducts} from '../../actions/products';
import {setFilter} from '../../actions/filter';

import ShopPage from '../../components/pages/ShopPage';


function getCategoryProductRelations(categoriesRelationship){
    let newRelations = [];
    if ( categoriesRelationship !== undefined ) {
        for(let i=0; i<categoriesRelationship.length; i++) {
            let o = categoriesRelationship[i];
            if (!newRelations[o.catFilterBy]) newRelations[o.catFilterBy] = [];
            newRelations[o.catFilterBy].push(o.productID);
        }
    }
    return newRelations;
}

const mapStateToProps = ({products}) => ({
    productsList: products.items.productsList,
    categories: products.items.categories,
    categoriesRelationship: getCategoryProductRelations( products.items.categoriesRelationship ),
    isReady: products.isReady,
});

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products)),
    setFilter
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);