import React from 'react';
import {connect} from 'react-redux';
import ProductCommentSingle from './ProductCommentSingle';

const ProductCommentsList = ({comments, users, commentsLength, handleRemove}) => {

    const NoCommentsMessage = () =>  <p className="woocommerce-noreviews">Отзывов пока нет.</p>;

    return (
        <div id="comments" className="comments">
            <h2 className="woocommerce-Reviews-title">Отзывы</h2>
            {commentsLength ? (
                <ol className="commentlist">
                    {comments.map(comment => (
                        <ProductCommentSingle
                            key={comment.id}
                            id={comment.id}
                            userName={comment.user_name}
                            users={users}
                            userID={comment.user_id}
                            updatedAt={comment.updated_at}
                            content={comment.content}
                            handleRemoveComment={handleRemove}
                        />
                    ))}
                </ol>
            ) : (
                <NoCommentsMessage />
            )}
        </div>
    );
};


export default ProductCommentsList;