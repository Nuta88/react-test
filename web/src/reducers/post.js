const post = (state = [], action) => {
    if(action.type === 'RECEIVE_POST') {
        return [
            ...state,
            action.post
        ]
    }
    return state
};

export default post