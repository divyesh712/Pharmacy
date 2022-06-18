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

} from '../constants/Constants';

import Authservices from '../Api/authservices';
import { Alert } from 'react-native-web';

export const GetOtp = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.GetOtp(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: GETOTP,
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }

        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            });

            console.log('error', error)
        }
    }
}

export const VerifyOtp = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.VerifyOtp(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: VERIFYOTP,
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}
export const AllCategories = (callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.All_Categories()
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: ALL_CATEGORIES,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}

export const ViewCartByIdApi = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.ViewCartById(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: VIEW_CART_BY_ID,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}

export const RemoveItemToCart = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.RemoveItemToCart(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: REMOVE_ITEM_TO_CART,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}

export const Medicine_Category_View_AllApi = (callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.Medicine_Category_View_All()
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: MEDICINE_CATEGORY_VIEW_ALL,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}

export const Get_AlternatemedicineApi = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.Get_Alternatemedicine(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: GET_ALTERNATEMEDICINE,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}
export const Store_LocationApi = (callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.Store_Location_View_all()
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: STORE_LOCATION_VIEW_ALL,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}
export const ViewBycategoriesApi = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.View_By_Categories(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: VIEW_BY_CATEGORIES,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}

export const ViewAllMedicineApi = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.All_Medicine(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: VIEW_ALL_MEDICINE,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}

export const View_Medicine_Api = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.View_By_Medicine_id(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: VIEW_BY_MEDICINE_ID,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}
export const Call_Request_Api = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.Call_Request(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: CALLREQUEST,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}
export const User_Prescription_Upload = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.User_Prescription_upload(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: USER_PRESCRIPTION_UPLOAD,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}
export const pincodeApi = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.Pincode(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: PINCODE,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}
export const User_address_delete_Api = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.User_address_delete(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: USER_ADDRESS_DELETE,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}
export const User_View_By_Id = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.View_By_userID(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: USER_VIEW_BY_ID,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}
export const Update_user_Name_Api = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.Update_user_Name(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: UPDATE_USERNAME,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}
export const Click_Here_Offer = (params, callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.Click_Here_Offer(params)
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: CLICKHERE_OFFER,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}
export const Contact_Us_Api = (callback) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await Authservices.Contact_Us()
            callback(data);
            if (data.status == 200) {
                dispatch({
                    type: CONTACT_US,
                    payload: data
                })
            }
            else {
                dispatch({
                    type: API_ERROR,
                    payload: error
                })
            }
        } catch (error) {
            dispatch({
                type: API_ERROR,
                payload: error
            })
            console.log('error', error)
        }
    }
}