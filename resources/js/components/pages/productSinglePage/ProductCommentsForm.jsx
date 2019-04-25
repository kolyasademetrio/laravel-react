import React from 'react';


const ProductCommentsForm = props => {
    const {commentsLength, title, userName, userEmail, handleChange, handleSubmit} = props;

    return (
        <div id="review_form_wrapper" className="review_form_wrapper">
            <div id="review_form">
                <div id="respond" className="comment-respond">
                    <span id="reply-title" className="comment-reply-title">
                        {commentsLength ? 'Ваша оценка' : `Будьте первым, кто оставил отзыв на “${title}”`}
                    </span>
                    <form onSubmit={handleSubmit}>
                        <div className="reply-title-after">
                            Используйте данную форму, чтобы оставить отзыв о товаре или задать вопрос
                        </div>
                        <p className="comment-form-author">
                            <label>Ваше имя &nbsp;<span className="required">*</span></label>
                            <input
                                name="userName"
                                onChange={handleChange}
                                type="text"
                                defaultValue={userName}
                            />
                        </p>
                        <p className="comment-form-email">
                            <label>E-mail &nbsp;<span className="required">*</span></label>
                            <input
                                name="userEmail"
                                onChange={handleChange}
                                type="text"
                                defaultValue={userEmail}
                            />
                        </p>
                        <p className="comment-form-comment">
                            <label>Текст сообщения &nbsp;<span className="required">*</span></label>
                            <textarea
                                name="productCommentContent"
                                onChange={handleChange}
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