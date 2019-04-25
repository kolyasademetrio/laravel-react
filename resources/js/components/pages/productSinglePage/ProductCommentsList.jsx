import React, {Component} from 'react';
import ProductCommentSingle from './ProductCommentSingle';

const NoCommentsMessage = () =>  <p className="woocommerce-noreviews">Отзывов пока нет.</p>;

class ProductCommentsList extends Component {

    constructor(props){
        super(props);
        this.handleRemoveCommentByID = this.handleRemoveCommentByID.bind(this);
    }

    handleRemoveCommentByID(id){
        const {removeProductCommentById} = this.props;
        removeProductCommentById(id);
    }

    render(){
        const {comments, users, commentsLength} = this.props;
        return (
            <div id="comments" className="comments">
                <h2 className="woocommerce-Reviews-title">Отзывы</h2>
                {commentsLength ? (
                    <ol className="commentlist">
                        {comments.map(comment => (
                            <ProductCommentSingle
                                key={comment.id}
                                id={comment.id}
                                userName={comment.user_name}
                                users={users}
                                userID={comment.user_id}
                                updatedAt={comment.updated_at}
                                content={comment.content}
                                handleRemoveComment={this.handleRemoveCommentByID}
                            />
                        ))}
                    </ol>
                ) : (
                    <NoCommentsMessage />
                )}
            </div>
        );
    };
};

export default ProductCommentsList;