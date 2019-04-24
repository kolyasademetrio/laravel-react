import {
    SET_PRODUCTS,
    SET_PRODUCT_BY_SLUG,
    SET_PRODUCT_BY_SLUG_SUCCEEDED,
    SET_PRODUCT_BY_SLUG_FAILED,
    SET_PRODUCT_COMMENTS,
    SET_PRODUCT_COMMENTS_SUCCEEDED,
    SET_PRODUCT_COMMENTS_FAILED,
    REMOVE_COMMENT_BY_ID,
    ADD_PRODUCT_COMMENT,
    SHOW_ALL,
    BESTSELLER,
    FACE,
    BODY,
    SCRUB
} from './types';

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products
});

export const setProductComments = comments => ({
    type: SET_PRODUCT_COMMENTS,
    payload: comments
});

export const setProductCommentsBySlug = slug => {
    return async dispatch => {
        dispatch({type: SET_PRODUCT_COMMENTS});

        axios.get(`/api/product-comments/${slug}`).then(data => {

            let {allComments, allUsers} = data.data;
            const users = allUsers && allUsers.reduce((acc, el) => (
                acc[el.id] = el, acc
            ), {});

            // while authorization does not work user_id
            // if current user is logged out -> userID is id of the guest user users.id = 11
            const USER_ID = 9;

            const payloadData = {
                userID: USER_ID,
                allComments: allComments,
                commentsLength: allComments.length,
                allUsers: users,
                userLogo: users[USER_ID]['logo'],
                userName: (USER_ID === 11) ? '' : users[USER_ID]['name'],
                userEmail: users[USER_ID]['email']
            };

            dispatch({type: SET_PRODUCT_COMMENTS_SUCCEEDED, payload: payloadData});
        }).catch(err => {
            dispatch({ type: SET_PRODUCT_COMMENTS_FAILED, payload: err });
        });
    }
};

export const removeProductCommentById = id => {
    return async dispatch => {
        axios.delete(`/api/product-comments/${id}`).then(() => {
            dispatch({ type: REMOVE_COMMENT_BY_ID, payload: id });
        });
    };
};

export const addProductComment = newComment => {
    return async dispatch => {
        axios.post('/api/product-comments', newComment).then(response => {
            dispatch({type: ADD_PRODUCT_COMMENT, payload: newComment});
        });
    };
};

export const setProductBySlug = slug => {
    return async dispatch => {
        dispatch({ type: SET_PRODUCT_BY_SLUG });

        axios.get(`/api/products/${slug}`)
            .then(({data}) => {
                if(data.product){
                    dispatch({ type: SET_PRODUCT_BY_SLUG_SUCCEEDED, payload: data });
                } else {
                    dispatch({ type: SET_PRODUCT_BY_SLUG_FAILED, payload: 404 });
                }
            }).catch(err => {
                dispatch({ type: SET_PRODUCT_BY_SLUG_FAILED, payload: err });
            });

        /*try {
            const { data } = await axios.get(`/api/products/${slug}`);

            if(data.product){
                dispatch({ type: SET_PRODUCT_BY_SLUG_SUCCEEDED, payload: data });
            } else {
                dispatch({ type: SET_PRODUCT_BY_SLUG_FAILED, payload: 404 });
            }
        } catch (err) {
            dispatch({ type: SET_PRODUCT_BY_SLUG_FAILED, payload: err });
        }*/
    };
}

export const CategoryFilters = {
    SHOW_ALL: SHOW_ALL,
    BESTSELLER: BESTSELLER,
    FACE: FACE,
    BODY: BODY,
    SCRUB: SCRUB,
};