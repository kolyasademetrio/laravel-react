import React, {Component} from 'react';
import ProductCommentsForm from '../components/ProductCommentsForm';
import ProductCommentsList from '../components/ProductCommentsList';

function ProductComments (props) {
    const {title, handleChange, handleSubmit} = props;
    const {comments, users, commentsLength, userName, userEmail} = props.state;

    return (
        <div id="reviews" className="woocommerce-Reviews">
            <ProductCommentsList
                comments={comments}
                users={users}
                commentsLength={commentsLength}
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