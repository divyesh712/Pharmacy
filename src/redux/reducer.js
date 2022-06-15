import {
    SET_LOADER,
    API_ERROR,
    GETOTP,
    VERIFYOTP,
    ALL_CATEGORIES,
    VIEW_CART_BY_ID,
    REMOVE_ITEM_TO_CART,
    MEDICINE_CATEGORY_VIEW_ALL,
    GET_ALTERNATEMEDICINE,
    STORE_LOCATION_VIEW_ALL,
    VIEW_BY_CATEGORIES,
    VIEW_ALL_MEDICINE,
    VIEW_BY_MEDICINE_ID,
    CALLREQUEST,
} from "../constants/Constants";

const initialState = {
    loading: false,
    error: "",
    allCategories: {},
    cart_Id: '',
    Remove_cart: '',
    Medicine_Category_View_All: {},
    getAlternateMedicine: {},
    StoreLocation: '',
    viewByCategory: '',
    All_Medicine: '',
    Medicine_category: '',


}
function userReducers(state = initialState, action) {

    switch (action.type) {
        case SET_LOADER:
            return {
                ...state,
                loading: true
            };
        case API_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,

            };
        case GETOTP:
            return {
                ...state,
                loading: false,
            }
        case VERIFYOTP:
            return {
                ...state,
                loading: false
            }
        case ALL_CATEGORIES:
            return {
                ...state,
                allCategories: action.payload.data,
                loading: false,
            }
        case VIEW_CART_BY_ID:
            return {
                ...state,
                cart_Id: action.payload.data,
                loading: false,
            }
        case REMOVE_ITEM_TO_CART:
            return {
                ...state,
                Remove_cart: action.payload,
                loading: false,
            }
        case MEDICINE_CATEGORY_VIEW_ALL:
            return {
                ...state,
                Medicine_Category_View_All: action.payload.data,
                loading: false
            }
        case GET_ALTERNATEMEDICINE:
            return {
                ...state,
                getAlternateMedicine: action.payload,
                loading: false
            }
        case STORE_LOCATION_VIEW_ALL:
            return {
                ...state,
                StoreLocation: action.payload.data,
                loading: false
            }
        case VIEW_BY_CATEGORIES:
            return {
                ...state,
                viewByCategory: action.payload.data,
                loading: false
            }
        case VIEW_ALL_MEDICINE:
            return {
                ...state,
                All_Medicine: action.payload.data,
                loading: false
            }
        case VIEW_BY_MEDICINE_ID:
            return {
                ...state,
                Medicine_category: action.payload.data,
                loading: false
            }
            case CALLREQUEST:
            return {
                ...state,
                CallRequest: action.payload.data,
                loading: false
            }

        default:
            return state;
    }
}
export default userReducers;