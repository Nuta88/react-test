import * as service from '../service/postService'
import * as types from '../constants/ActionTypes'

const receivePosts = posts => ({
    type: types.RECEIVE_POSTS,
    posts
});

const receivePost = post => ({
    type: types.RECEIVE_POST,
    post
});

export const getPosts = () => dispatch => {
    service.getAllPost().then(posts => {
        dispatch(receivePosts(posts.data));
    })
};

export const getPost = (id) => dispatch => {
    console.log(id);
    service.getPost(id).then(post => {
        dispatch(receivePost(post.data));
    })
};