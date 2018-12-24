const posts = (state = [], action) => {
    if(action.type === 'RECEIVE_POSTS') {
        return [
            ...state,
            ...action.posts
        ];
    }
    return state;
};

export default posts
