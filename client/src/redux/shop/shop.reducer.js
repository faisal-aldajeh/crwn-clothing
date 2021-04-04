import ShopActionsTypes from './shop.types';

const INTIAL_STATE = {
    collections : null,
    isFetching  : false,
    errorMessage: undefined
}


const shopReducer = ( state = INTIAL_STATE , action ) => {
    switch (action.type) {
        case ShopActionsTypes.FETCH_COLLECTIONS_START:   
            return {
                ...state,
                isFetching: true
            };
        case ShopActionsTypes.FETCH_COLLECTIONS_SECCESS:
            return {
                ...state,
                isFetching : false,
                collections: action.payload
            };
        
        case ShopActionsTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching   : false,
                errorMessage : action.payload
            };
        default:
            return state;
    }

}

export default shopReducer; 