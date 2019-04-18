import React, {Component} from 'react';
import {connect} from 'react-redux';
import {validateEmail} from "../helpers/validation";

class ProductCommentsForm extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            // START: input fields initional value
            userName: '',
            userEmail: '',
            productCommentContent: '',
            // END: input fields initional value
            productSlug: null,
            productID: null,
            userID: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    handleSubmit(e){
        e.preventDefault();
        
        if ( this.state.productCommentContent && validateEmail(this.state.userEmail) && this.state.userName ) {
            const productComment = {
                content: this.state.productCommentContent,
                user_name: this.state.userName,
                user_email: this.state.userEmail,

                product_slug: this.refs.productSlug.value,
                product_id: this.refs.productID.value,
                user_id: this.refs.userID.value,
            }

            axios.post('/api/product-comments', productComment).then(response => {
                const newCommentsList = [...this.state.comments, response.data];
                this.setState({
                    comments: newCommentsList,
                    commentsLength: newCommentsList.length,
                });
            });
        }
    }

    render(){
        
        const {commentsLength, title, userName, userEmail} = this.props;
        //const {userName, userEmail, handleSubmit, handleChange} = this.state;

        return (
            <div id="review_form_wrapper" className="review_form_wrapper">
                <div id="review_form">
                    <div id="respond" className="comment-respond">
                        <span id="reply-title" className="comment-reply-title">
                            {commentsLength ? 'Ваша оценка' : `Будьте первым, кто оставил отзыв на “${title}”`} <small><a id="cancel-comment-reply-link" href="#" style={{display:'none'}}>Отменить ответ</a></small>
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
                                    defaultValue={userName} ref="test"
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
                                    defaultValue={userEmail}
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
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const USER_ID = 10;
    const {allUsers, allComments} = state.products.comments;
    const users = allUsers && allUsers.reduce((acc, el) => (
        acc[el.id] = el, acc
    ), {});

    const {id, slug, title} = state.products.product.product;

    return {
        productID: id,
        productSlug: slug,
        userID: 11,
        userName: (USER_ID === 11) ? '' : (users && users[USER_ID]['name']),
        userEmail: users && users[USER_ID]['email'],
        commentsLength: allComments && allComments.length,
        title: title,
    };
};

export default connect(mapStateToProps)(ProductCommentsForm);