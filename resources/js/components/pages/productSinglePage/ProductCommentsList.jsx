import React from 'react';
import {connect} from 'react-redux';
import ProductCommentSingle from './ProductCommentSingle';

const ProductCommentsList = props => {

    const {comments, users, commentsLength, handleRemove} = props;

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
}

const mapStateToProps = state => {
    const {allUsers, allComments, commentsLength} = state.products.comments;
    return {
        users: allUsers,
        comments: allComments,
        commentsLength: commentsLength,
    };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps)(ProductCommentsList);