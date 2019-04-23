import React from 'react';
import {connect} from 'react-redux';

const ProductCommentsList = props => {

    const {comments, users, commentsLength, handleRemove} = props;

    const NoReviewMessage = () =>  <p className="woocommerce-noreviews">Отзывов пока нет.</p>;

    return (
        <div id="comments" className="comments">
            <h2 className="woocommerce-Reviews-title">Отзывы</h2>
            {commentsLength ? (
                <ol className="commentlist">
                    {comments.map(comment => (
                        <li key={comment.id} className="comment byuser comment-author-admin bypostauthor even thread-even depth-1" id="li-comment-11">
                            <div id="comment-11" className="comment_container">
                                <img
                                    alt="user"
                                    alt={comment.user_name ? comment.user_name : users[comment.user_id].name}
                                    src={users[comment.user_id].logo}
                                    className="avatar avatar-60 photo" height="60" width="60"
                                />
                                <div className="comment-text">
                                    <p className="meta">
                                        <strong className="woocommerce-review__author">
                                            {comment.user_name ? comment.user_name : users[comment.user_id].name}
                                        </strong>
                                        <span className="woocommerce-review__dash">&nbsp;–&nbsp;</span>
                                        <time
                                            className="woocommerce-review__published-date"
                                            dateTime={comment.updated_at}
                                        >
                                            {comment.updated_at}
                                        </time>
                                    </p>
                                    <div className="description">
                                        <p>{comment.content}</p>
                                    </div>
                                    <div
                                        className="remove_comment" onClick={() => handleRemove(comment.id)}
                                    >&times;</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            ) : (
                <NoReviewMessage />
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