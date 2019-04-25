import React from 'react';


const ProductCommentSingle = ({id, userName, users, userID, updatedAt, content, handleRemoveComment}) => {
    return (
        <li key={id} className="comment byuser comment-author-admin bypostauthor even thread-even depth-1" id={`li-comment-${id}`}>
            <div id={`comment-${id}`} className="comment_container">
                <img
                    alt="user"
                    alt={userName ? userName : users[userID].name}
                    src={users[userID].logo}
                    className="avatar avatar-60 photo" height="60" width="60"
                />
                <div className="comment-text">
                    <p className="meta">
                        <strong className="woocommerce-review__author">
                            {userName ? userName : users[userID].name}
                        </strong>
                        <span className="woocommerce-review__dash">&nbsp;–&nbsp;</span>
                        <time
                            className="woocommerce-review__published-date"
                            dateTime={updatedAt}
                        >
                            {updatedAt}
                        </time>
                    </p>
                    <div className="description">
                        <p>{content}</p>
                    </div>
                    <div
                        className="remove_comment" onClick={() => handleRemoveComment(id)}
                    >&times;</div>
                </div>
            </div>
        </li>
    );
};

export default ProductCommentSingle;