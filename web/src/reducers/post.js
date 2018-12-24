const post = (state = [], action) => {
    if(action.type === 'RECEIVE_POST') {
        return action.post;
    }
    return state;
};

export default post