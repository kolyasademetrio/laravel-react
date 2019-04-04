import React, {Component} from 'react';
import ReactHtmlParser from "react-html-parser";

class ProductTabs extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
            data: [
                {'descr': this.props.descr},
                {'ingredients': this.props.ingredients},
                {'usage': this.props.usage},
            ]
        };

        this.changeTabOnClick = this.changeTabOnClick.bind(this)
    }

    changeTabOnClick(index){
        this.setState({
            activeIndex: 1
        });
    }

    render(){
        const {descr, ingredients, usage} = this.props;

        return (
            <div className="woocommerce-tabs wc-tabs-wrapper">
                <ul className="tabs wc-tabs">
                    {descr && (
                        <li className="description_tab active" onClick={this.changeTabOnClick}>
                            <span>Описание</span>
                        </li>
                    )}

                    {ingredients && (
                        <li className="ingredients_tab" onClick={this.changeTabOnClick}>
                            <span>Состав</span>
                        </li>
                    )}

                    {usage && (
                        <li className="usage_tab" onClick={this.changeTabOnClick}>
                            <span>Применение</span>
                        </li>
                    )}

                    <li className="reviews_tab" onClick={this.changeTabOnClick}>
                        <span>Отзывы (0)</span>
                    </li>
                </ul>

                <div>{this.state.activeIndex}</div>

                <div className="panel" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'block'}}>
                    {ReactHtmlParser(descr)}
                </div>

                <div className="panel" id="tab-ingredients" role="tabpanel" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'none'}}>
                    {ReactHtmlParser(ingredients)}
                </div>


                <div className="panel" id="tab-usage" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'none'}}>
                    {ReactHtmlParser(usage)}
                </div>

                <div className="panel" id="tab-reviews" style={{display: 'none'}}>
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