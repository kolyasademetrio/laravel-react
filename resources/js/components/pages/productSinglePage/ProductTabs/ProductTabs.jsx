import React, {Component} from 'react';
import ReactHtmlParser from "react-html-parser";
import {validateEmail} from '../../../../helpers/validation';
import Tabs from './Tabs';
import ProductComments from '../../../ProductComments';

class ProductTabs extends Component {

    constructor(props){
        super(props);
        this.state = {
            comments: [],
            users: {},
            commentsLength: 0,
            /* states for creating new comment */
            productCommentContent: '',
            productSlug: this.props.productSlug,
            productID: this.props.productID,
            userID: null,
            userName: '',
            userEmail: '',
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
                comments: allComments,//is Array
                users: users,// is Object
                userID: USER_ID,
                // if current user is logged out then userName is empty string
                // is for empty string validation before send request to server
                userName: (USER_ID === 11) ? '' : users[USER_ID]['name'],
                userEmail: users[USER_ID]['email'],
                userLogo: users[USER_ID]['logo'],
                commentsLength: allComments.length ? allComments.length : 0,
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

        if ( this.state.productCommentContent && validateEmail(this.state.userEmail) && this.state.userName ) {
            const productComment = {
                content: this.state.productCommentContent,
                product_slug: this.state.productSlug,
                product_id: this.state.productID,
                user_id: this.state.userID,
                user_name: this.state.userName,
                user_email: this.state.userEmail,
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
        const {tabBg, descr, ingredients, usage, title } = this.props;

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

                {/*<div title={`Отзывы (${commentslength})`}>*/}
                <div title={`Отзывы (${this.state.commentsLength})`}>
                    <ProductComments
                        title={title}
                        state={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
            </Tabs>
        );
    }
}

export default ProductTabs;