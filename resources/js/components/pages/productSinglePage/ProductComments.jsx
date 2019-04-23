import React, {Component} from 'react';
import ProductCommentsForm from './ProductCommentsForm';
import ProductCommentsList from './ProductCommentsList';

function ProductComments (props) {
    const {handleChange, handleSubmit, handleRemove} = props;

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