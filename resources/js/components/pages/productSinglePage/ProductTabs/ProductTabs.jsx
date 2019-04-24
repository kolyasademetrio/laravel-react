import React, {Component} from 'react';
import ReactHtmlParser from "react-html-parser";
import {validateEmail} from '../../../../helpers/validation';
import Tabs from './Tabs';
import ProductComments from '../ProductComments';

class ProductTabs extends Component {

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
                user_name: useremail,
                user_email: username,

                product_slug: this.props.productSlug,
                product_id: this.props.productID,
                user_id: this.props.userID,
            }
            
            this.props.addProductComment(productComment);
        }
    }

    handleRemove(id){
        this.props.removeProductCommentById(id);
    }

    render(){
        const {tabBg, descr, ingredients, usage, commentsLength} = this.props;

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

                <div title={`Отзывы (${commentsLength})`}>
                    <ProductComments
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleRemove={this.handleRemove}
                    />
                </div>
            </Tabs>
        );
    }
}

export default ProductTabs;