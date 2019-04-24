import React, {Component} from 'react';
import ProductCommentsForm from './ProductCommentsForm';
import ProductCommentsList from '../../../containers/pages/ProductSinglePage/ProductCommentsList';

function ProductComments ({handleChange, handleSubmit, handleRemove}) {
    return (
        <div id="reviews" className="woocommerce-Reviews">
            <ProductCommentsList
                handleRemove={handleRemove}
            />

            <ProductCommentsForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default ProductComments;