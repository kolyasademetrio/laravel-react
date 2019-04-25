import React from 'react';
import ProductCommentsForm from '../../../containers/pages/ProductSinglePage/ProductCommentsForm';
import ProductCommentsList from '../../../containers/pages/ProductSinglePage/ProductCommentsList';

const ProductComments = () => {
    return (
        <div id="reviews" className="woocommerce-Reviews">
            <ProductCommentsList />

            <ProductCommentsForm />
        </div>
    );
}

export default ProductComments;