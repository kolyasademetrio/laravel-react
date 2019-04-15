import React from 'react';

function ProductCommentsForm(props){
    const {commentsLength, title, userName, userEmail, handleSubmit, handleChange} = props;

    return (
        <div id="review_form_wrapper" className="review_form_wrapper">
            <div id="review_form">
                <div id="respond" className="comment-respond">
                    <span id="reply-title" className="comment-reply-title">
                        {commentsLength ? 'Ваша оценка' : `Будьте первым, кто оставил отзыв на “${title}”`} <small><a id="cancel-comment-reply-link" href="#" style={{display:'none'}}>Отменить ответ</a></small>
                    </span>
                    <form
                        onSubmit={handleSubmit}
                        method="post"
                        id="commentform"
                        className="comment-form"
                        noValidate=""
                    >
                        <div className="reply-title-after">
                            Используйте данную форму, чтобы оставить отзыв о товаре или задать вопрос
                        </div>
                        <p className="comment-form-author">
                            <label>Ваше имя &nbsp;<span className="required">*</span></label>
                            <input
                                onChange={handleChange}
                                id="author"
                                name="userName"
                                type="text"
                                size="30"
                                aria-required="true"
                                required=""
                                defaultValue={userName}
                            />
                        </p>
                        <p className="comment-form-email">
                            <label>E-mail &nbsp;<span className="required">*</span></label>
                            <input
                                onChange={handleChange}
                                id="email"
                                name="userEmail"
                                type="email"
                                size="30"
                                aria-required="true"
                                required=""
                                defaultValue={userEmail}
                            />
                        </p>
                        <p className="comment-form-comment">
                            <label>Текст сообщения &nbsp;<span className="required">*</span></label>
                            <textarea
                                onChange={handleChange}
                                id="comment"
                                name="productCommentContent"
                                cols="45" rows="8"
                            >
                            </textarea>
                        </p>
                        <p className="form-submit">
                            <input name="submit" type="submit" id="submit" className="submit" value="Отправить"/>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductCommentsForm;