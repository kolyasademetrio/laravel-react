import {connect} from 'react-redux';
import {setProducts} from '../../actions/products';
import {setFilter} from '../../actions/filter';
import {getCategoryProductRelationsByCatSlug} from '../../helpers/getCategoryProductRelations';
import Recommended from '../../components/recomended/Recommended';



const mapStateToProps = ({products},ownProps) => ({
    productsList: products.items.productsList,
    categories: products.items.categories,
    categoriesRelationship: getCategoryProductRelationsByCatSlug( products.items.categoriesRelationship ),
    isProductsReady: products.isProductsReady,
});

/*const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products)),
    setFilter:   filter   => dispatch(setFilter(filter)),
});*/

/* если параметры совпадают то можно сократить до такого вида */
/* setProducts: PRODUCTS => dispatch(setProducts(PRODUCTS)), */
const mapDispatchToProps = {
    setProducts,
    setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommended);