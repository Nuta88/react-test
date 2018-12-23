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
    service.getPost(id).then(post => {
        let currentPost = post.data;
        service.getCommentsBy(id).then(res=>{
            currentPost =  {...currentPost, comments: res.data};
            service.getUserBy(post.data.userId).then(res=>{
                currentPost = {...currentPost, name: res.data.name};
                dispatch(receivePost(currentPost));
            });
        });
    })
};
