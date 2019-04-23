import React, {Component} from 'react';
import ProductCommentsForm from './ProductCommentsForm';
import ProductCommentsList from './ProductCommentsList';

function ProductComments (props) {
    const {title, handleChange, handleSubmit, handleRemove} = props;
    const {comments, users, commentsLength, userName, userEmail} = props.state;

    return (
        <div id="reviews" className="woocommerce-Reviews">
            <ProductCommentsList
                comments={comments}
                users={users}
                commentsLength={commentsLength}
                handleRemove={handleRemove}
            />

            <ProductCommentsForm
                title={title}
                commentsLength={commentsLength}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                userName={userName}
                userEmail={userEmail}
            />
        </div>
    );
}

export default ProductComments;