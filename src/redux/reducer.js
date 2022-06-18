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
    USER_PRESCRIPTION_UPLOAD,
    PINCODE,
    USER_ADDRESS_DELETE,
    USER_VIEW_BY_ID,
    UPDATE_USERNAME,
    CLICKHERE_OFFER,
    CONTACT_US
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
    prescription: '',
    pincode: '',
    UserAddressDelete: '',
    UserViewById: '',
    updateUserName: '',
    ClickHereOffer: '',
    Contactus: '',

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
        case USER_PRESCRIPTION_UPLOAD:
            return {
                ...state,
                prescription: action.payload.data,
                loading: false
            }
        case PINCODE:
            return {
                ...state,
                pincode: action.payload.data,
                loading: false
            }
        case USER_ADDRESS_DELETE:
            return {
                ...state,
                UserAddressDelete: action.payload.data,
                loading: false
            }
        case USER_VIEW_BY_ID:
            return {
                ...state,
                UserViewById: action.payload.data,
                loading: false
            }
        case UPDATE_USERNAME:
            return {
                ...state,
                updateUserName: action.payload.data,
                loading: false
            }
        case CLICKHERE_OFFER:
            return {
                ...state,
                ClickHereOffer: action.payload.data,
                loading: false
            }

        case CONTACT_US:
            return {
                ...state,
                Contactus: action.payload.data,
                loading: false
            }

        default:
            return state;
    }
}
export default userReducers;