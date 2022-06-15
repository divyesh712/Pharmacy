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
     CALLREQUEST

} from '../constants/Constants';

import Authservices from '../Api/authservices';

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
    return async(dispatch) => {
        dispatch({type : SET_LOADER})
        try {
            const {data} = await Authservices.ViewCartById(params)
            callback(data);
            if(data.status == 200){
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
    return async(dispatch) => {
        dispatch({type : SET_LOADER})
        try {
            const {data} = await Authservices.RemoveItemToCart(params)
            callback(data);
            if(data.status == 200){
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
        dispatch({type : SET_LOADER})
        try {
            const {data} = await Authservices.Medicine_Category_View_All()
            callback(data);
            if(data.status == 200){
                dispatch({
                    type:MEDICINE_CATEGORY_VIEW_ALL,
                    payload :data
                })
            }
            else{
                dispatch({
                    type:API_ERROR,
                    payload:error
                })
            }
        } catch(error){
            dispatch({
                 type:API_ERROR,
                 payload:error
            })
            console.log('error',error)
        }
    }
}

export const Get_AlternatemedicineApi = (params, callback) => {
    return async(dispatch) => {
        dispatch({type : SET_LOADER})
        try {
            const {data} = await Authservices.Get_Alternatemedicine(params)
            callback(data);
            if(data.status == 200){
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
        dispatch({type : SET_LOADER})
        try {
            const {data} = await Authservices.Store_Location_View_all()
            callback(data);
            if(data.status == 200){
                dispatch({
                    type:STORE_LOCATION_VIEW_ALL,
                    payload :data
                })
            }
            else{
                dispatch({
                    type:API_ERROR,
                    payload:error
                })
            }
        } catch(error){
            dispatch({
                 type:API_ERROR,
                 payload:error
            })
            console.log('error',error)
        }
    }
}
export const ViewBycategoriesApi = (params, callback) => {
    return async(dispatch) => {
        dispatch({type : SET_LOADER})
        try {
            const {data} = await Authservices.View_By_Categories(params)
            callback(data);
            if(data.status == 200){
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
    return async(dispatch) => {
        dispatch({type : SET_LOADER})
        try {
            const {data} = await Authservices.All_Medicine(params)
            callback(data);
            if(data.status == 200){
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

export const View_Medicine_Api = (params,callback) => {
    return async(dispatch) => {
        dispatch({type : SET_LOADER})
        try {
            const {data} = await Authservices.View_By_Medicine_id(params)
            callback(data);
            if(data.status == 200){
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
export const Call_Request_Api = (params,callback) => {
    return async(dispatch) => {
        dispatch({type : SET_LOADER})
        try {
            const {data} = await Authservices.Call_Request(params)
            callback(data);
            if(data.status == 200){
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