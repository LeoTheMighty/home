const initialState = {
    firstLoading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            state = {
                ...state
            };
            break;
    }
    return state;
}
