import React from 'react';

const ProductCommentsList = props => {

    const {comments, users, commentsLength} = props;

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

export default ProductCommentsList;