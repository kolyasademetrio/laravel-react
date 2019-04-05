import React from 'react';
import ReactHtmlParser from "react-html-parser";
import Tabs from './Tabs';

const ProductTabs = props => {
    return (
        <Tabs tabBg={props.tabBg}>
            {props.descr && (
                <div title="Описание">
                    {ReactHtmlParser(props.descr)}
                </div>
            )}

            {props.ingredients && (
                <div title="Состав">
                    {ReactHtmlParser(props.ingredients)}
                </div>
            )}

            {props.usage && (
                <div title="Применение">
                    {ReactHtmlParser(props.usage)}
                </div>
            )}

            <div title="Отзывы (0)">
                <div id="reviews" className="woocommerce-Reviews">
                    <div id="comments" className="comments">
                        <h2 className="woocommerce-Reviews-title">Отзывы</h2>
                        <p className="woocommerce-noreviews">Отзывов пока нет.</p>
                    </div>

                    <div id="review_form_wrapper" className="review_form_wrapper">
                        <div id="review_form">
                            <div id="respond" className="comment-respond">
                                <span id="reply-title" className="comment-reply-title">
                                    Будьте первым, кто оставил отзыв на “Детский крем” <small><a id="cancel-comment-reply-link" href="#" style={{display:'none'}}>Отменить ответ</a></small>
                                </span>
                                <form method="post" id="commentform" className="comment-form" noValidate="">
                                    <div className="reply-title-after">Используйте
                                        данную форму, чтобы оставить отзыв о товаре или
                                        задать вопрос
                                    </div>
                                    <p className="comment-form-author">
                                        <label>Ваше имя &nbsp;<span className="required">*</span></label>
                                        <input id="author" name="author" type="text" size="30" aria-required="true" required=""/>
                                    </p>
                                    <p className="comment-form-email">
                                        <label>E-mail &nbsp;<span className="required">*</span></label>
                                        <input id="email" name="email" type="email" size="30" aria-required="true" required=""/>
                                    </p>
                                    <p className="comment-form-comment">
                                        <label>Текст сообщения &nbsp;<span className="required">*</span></label>
                                        <textarea id="comment" name="comment" cols="45" rows="8"></textarea>
                                    </p>
                                    <p className="form-submit">
                                        <input name="submit" type="submit" id="submit" className="submit" value="Отправить"/>
                                        <input type="hidden" name="comment_post_ID" id="comment_post_ID"/>
                                        <input type="hidden" name="comment_parent" id="comment_parent"/>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </Tabs>
    );
}

export default ProductTabs;