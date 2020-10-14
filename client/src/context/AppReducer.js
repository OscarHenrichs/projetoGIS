export default (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                loading: false,
                transactionsUser: action.payload
            }
        case 'GET_USERS_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'POST_USERS':
            return {
                ...state,
                transactionsUser: [...state.transactionsUser, action.payload]
            }
        case 'POST_USERS_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}