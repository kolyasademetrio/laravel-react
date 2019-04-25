import React, {Component} from 'react';
import {validateEmail} from "../../../helpers/validation";


class ProductCommentsForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            productCommentContent: '',
            userName: '',
            userEmail: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount(){
        const {productSlug, setProductCommentsBySlug} = this.props;
        setProductCommentsBySlug(productSlug);
    }

    handleChange(e){
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    handleSubmit(e){
        e.preventDefault();

        const comment = this.state.productCommentContent;
        const useremail = this.state.userEmail ? this.state.userEmail : this.props.userEmail;
        const username = this.state.userName ? this.state.userName : this.props.userName;

        if ( comment && validateEmail(useremail) && username ) {
            const productComment = {
                content: comment,
                user_name: username,
                user_email: useremail,

                product_slug: this.props.productSlug,
                product_id: this.props.productID,
                user_id: this.props.userID,
            }

            const {addProductComment} = this.props;
            addProductComment(productComment);
        }
    }

    handleRemove(id){
        const {removeProductCommentById} = this.props;
        removeProductCommentById(id);
    }

    render(){
        const {commentsLength, title, userName, userEmail} = this.props;

        return (
            <div id="review_form_wrapper" className="review_form_wrapper">
                <div id="review_form">
                    <div id="respond" className="comment-respond">
                    <span id="reply-title" className="comment-reply-title">
                        {commentsLength ? 'Ваша оценка' : `Будьте первым, кто оставил отзыв на “${title}”`}
                    </span>
                        <form onSubmit={this.handleSubmit}>
                            <div className="reply-title-after">
                                Используйте данную форму, чтобы оставить отзыв о товаре или задать вопрос
                            </div>
                            <p className="comment-form-author">
                                <label>Ваше имя &nbsp;<span className="required">*</span></label>
                                <input
                                    name="userName"
                                    onChange={this.handleChange}
                                    type="text"
                                    defaultValue={userName}
                                />
                            </p>
                            <p className="comment-form-email">
                                <label>E-mail &nbsp;<span className="required">*</span></label>
                                <input
                                    name="userEmail"
                                    onChange={this.handleChange}
                                    type="text"
                                    defaultValue={userEmail}
                                />
                            </p>
                            <p className="comment-form-comment">
                                <label>Текст сообщения &nbsp;<span className="required">*</span></label>
                                <textarea
                                    name="productCommentContent"
                                    onChange={this.handleChange}
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

export default ProductCommentsForm;