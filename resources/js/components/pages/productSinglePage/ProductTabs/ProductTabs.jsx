import React, {Component} from 'react';
import ReactHtmlParser from "react-html-parser";
import Tabs from './Tabs';

class ProductTabs extends Component {

    componentDidMount(){
        const {productSlug} = this.props;

        axios.get(`/api/product-comments/${productSlug}`).then(data => {
            let {allComments, allUsers} = data.data;
            console.log( allComments );
            console.log( allUsers );
            const users = allUsers.map(user => {
                let userObj = {};
                userObj[user.id] = user;

                return userObj;
            });

            console.log( 'users', users );
        });
    }

    render(){
        const {tabBg, descr, ingredients, usage} = this.props;

        return (
            <Tabs tabBg={tabBg}>
                {descr && (
                    <div title="Описание">
                        {ReactHtmlParser(descr)}
                    </div>
                )}

                {ingredients && (
                    <div title="Состав">
                        {ReactHtmlParser(ingredients)}
                    </div>
                )}

                {usage && (
                    <div title="Применение">
                        {ReactHtmlParser(usage)}
                    </div>
                )}

                <div title="Отзывы (0)">
                    <div id="reviews" className="woocommerce-Reviews">
                        <div id="comments" className="comments">
                            <h2 className="woocommerce-Reviews-title">Отзывы</h2>
                            <p className="woocommerce-noreviews">Отзывов пока нет.</p>

                            <ol className="commentlist">
                                <li className="comment byuser comment-author-admin bypostauthor even thread-even depth-1" id="li-comment-11">
                                    <div id="comment-11" className="comment_container">
                                        <img alt="user1"
                                             src="/images/user.png"
                                             className="avatar avatar-60 photo" height="60" width="60"
                                        />
                                        <div className="comment-text">
                                            <p className="meta">
                                                <strong className="woocommerce-review__author">admin </strong>
                                                <span className="woocommerce-review__dash">–</span>
                                                <time className="woocommerce-review__published-date"
                                                      dateTime="2018-08-09T11:53:52+00:00">Август 9, 2018
                                                </time>
                                            </p>
                                            <div className="description">
                                                <p>zdzd</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="li-comment-24">
                                    <div id="comment-24" className="comment_container">
                                        <img alt=""
                                             src="/images/user.png"
                                             className="avatar avatar-60 photo" height="60" width="60"
                                        />
                                        <div className="comment-text">
                                            <p className="meta">
                                                <strong className="woocommerce-review__author">admin </strong>
                                                <em className="woocommerce-review__verified verified">(проверенный владелец)</em>
                                                <span className="woocommerce-review__dash">–</span>
                                                <time className="woocommerce-review__published-date" dateTime="2018-08-22T07:43:02+00:00">
                                                    Август 22, 2018
                                                </time>
                                            </p>
                                            <div className="description">
                                                <p>ghgh</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ol>
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
}

export default ProductTabs;