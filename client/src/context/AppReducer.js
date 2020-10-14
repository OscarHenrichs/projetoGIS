export default (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'GET_USERS_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}