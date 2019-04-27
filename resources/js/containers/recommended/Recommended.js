import {connect} from 'react-redux';
import {setAllProducts} from '../../actions/products';
import {setFilter} from '../../actions/filter';
import {getCategoryProductRelationsByCatSlug} from '../../helpers/getCategoryProductRelations';
import Recommended from '../../components/recomended/Recommended';



const mapStateToProps = ({products}) => ({
    categories: products.items.categories,
    isProductsReady: products.isProductsReady,
    isProductsLoading: products.isProductsLoading,
});

/*const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products)),
    setFilter:   filter   => dispatch(setFilter(filter)),
});*/

/* если параметры совпадают то можно сократить до такого вида */
/* setProducts: PRODUCTS => dispatch(setProducts(PRODUCTS)), */
const mapDispatchToProps = {
    setAllProducts,
    setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommended);