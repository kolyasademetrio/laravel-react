import React, {Component} from 'react';
import ReactHtmlParser from "react-html-parser";
import Tabs from './Tabs';

class ProductTabs extends Component {

    constructor(props){
        super(props);
        this.state = {
            comments: [],
            users: {},
            userID: null,
            productCommentContent: '',
            userName: '',
            userEmail: '',
            userLogo: '',
            productSlug: this.props.productSlug,
            productID: this.props.productID,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const {productSlug} = this.props;

        axios.get(`/api/product-comments/${productSlug}`).then(data => {
            let {allComments, allUsers} = data.data;
            const users = allUsers.reduce((acc, el) => (
                acc[el.id] = el, acc
            ), {});

            /*
            if current user is logged out -> userID is id of the guest user users.id = 11
            while authorization does not work the variable is declared here
            */
            const USER_ID = this.state.userID ? this.state.userID : 11

            this.setState({
                comments: allComments,
                users: users,
                userID: USER_ID,
                userName: users[USER_ID]['name'],
                userEmail: users[USER_ID]['email'],
                userLogo: users[USER_ID]['logo'],
            });
        });
    }

    handleChange(e){
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    handleSubmit(e){
        e.preventDefault();

        if ( this.state.productCommentContent ) {
            const productComment = {
                content: this.state.productCommentContent,
                productSlug: this.state.productSlug,
                productID: this.state.productID,
                userID: this.state.userID,
                userName: this.state.userName,
                userEmail: this.state.userEmail,
            }
            axios.post('/api/product-comments', productComment).then(response => {
                console.log( response );
            });
        }
    }

    render(){
        const {title, tabBg, descr, ingredients, usage} = this.props;

        const {comments, users} = this.state;

        const commentslength = comments.length ? comments.length : 0;

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

                <div title={`Отзывы (${commentslength})`}>
                    <div id="reviews" className="woocommerce-Reviews">
                        <div id="comments" className="comments">
                            <h2 className="woocommerce-Reviews-title">Отзывы</h2>
                            {commentslength ? (
                                <ol className="commentlist">
                                    {comments.map(comment => (
                                        <li key={comment.id} className="comment byuser comment-author-admin bypostauthor even thread-even depth-1" id="li-comment-11">
                                            <div id="comment-11" className="comment_container">
                                                <img
                                                    alt="user"
                                                    alt={users[comment.user_id].name}
                                                    src={users[comment.user_id].logo}
                                                    className="avatar avatar-60 photo" height="60" width="60"
                                                />
                                                <div className="comment-text">
                                                    <p className="meta">
                                                        <strong className="woocommerce-review__author">
                                                            {users[comment.user_id].name}
                                                        </strong>
                                                        <span className="woocommerce-review__dash">
                                                            &nbsp;–&nbsp;
                                                        </span>
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
                                <p className="woocommerce-noreviews">Отзывов пока нет.</p>
                            )}
                        </div>

                        <div id="review_form_wrapper" className="review_form_wrapper">
                            <div id="review_form">
                                <div id="respond" className="comment-respond">
                                <span id="reply-title" className="comment-reply-title">
                                    {commentslength ? 'Ваша оценка' : `Будьте первым, кто оставил отзыв на “${title}”`} <small><a id="cancel-comment-reply-link" href="#" style={{display:'none'}}>Отменить ответ</a></small>
                                </span>
                                    <form
                                        onSubmit={this.handleSubmit}
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
                                                onChange={this.handleChange}
                                                id="author"
                                                name="userName"
                                                type="text"
                                                size="30"
                                                aria-required="true"
                                                required=""
                                            />
                                        </p>
                                        <p className="comment-form-email">
                                            <label>E-mail &nbsp;<span className="required">*</span></label>
                                            <input
                                                onChange={this.handleChange}
                                                id="email"
                                                name="userEmail"
                                                type="email"
                                                size="30"
                                                aria-required="true"
                                                required=""
                                            />
                                        </p>
                                        <p className="comment-form-comment">
                                            <label>Текст сообщения &nbsp;<span className="required">*</span></label>
                                            <textarea
                                                onChange={this.handleChange}
                                                id="comment"
                                                name="productCommentContent"
                                                cols="45" rows="8"
                                            >
                                            </textarea>
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