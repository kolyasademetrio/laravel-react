import {connect} from 'react-redux';
import {setProducts} from '../../actions/products';
import {setFilter} from '../../actions/filter';
import getCategoryProductRelations from '../../helpers/getCategoryProductRelations';
import Recommended from '../../components/recomended/Recommended';



const mapStateToProps = ({ products }) => ({
    productsList: products.items.productsList,
    categories: products.items.categories,
    categoriesRelationship: getCategoryProductRelations( products.items.categoriesRelationship ),
    isReady: products.isReady,
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