import React, {Component} from 'react';
import ReactHtmlParser from "react-html-parser";

class ProductTabs extends Component {
    render(){
        const {descr, ingredients, usage} = this.props;

        return (
            <div className="woocommerce-tabs wc-tabs-wrapper">
                <ul className="tabs wc-tabs" role="tablist">
                    <li className="description_tab active">
                        <a href="#tab-description">Описание</a>
                    </li>
                    <li className="ingredients_tab">
                        <a href="#tab-ingredients">Состав</a>
                    </li>
                    <li className="usage_tab">
                        <a href="#tab-usage">Применение</a>
                    </li>
                    <li className="reviews_tab">
                        <a href="#tab-reviews">Отзывы (0)</a>
                    </li>
                </ul>

                <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'block'}}>
                    {ReactHtmlParser(descr)}
                </div>

                <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--ingredients panel entry-content wc-tab" id="tab-ingredients" role="tabpanel" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'none'}}>
                    {ReactHtmlParser(ingredients)}
                </div>


                <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--usage panel entry-content wc-tab" id="tab-usage" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'none'}}>
                    {ReactHtmlParser(usage)}
                </div>

                <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" style={{display: 'none'}}>
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
            </div>
        );
    }
}

export default ProductTabs;