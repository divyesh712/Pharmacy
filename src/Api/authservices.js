import {
    GETOTP,
    VERIFYOTP,
    VIEW_BY_CATEGORIES_ID,
    ALL_CATEGORIES,
    VIEW_BY_CATEGORIES,
    VIEW_BY_PRODUCT,
    VIEW_ALL_MEDICINE,
    VIEW_BY_CATEGORY,
    PRODUCT_VIEW_BY_MEDICINEID,
    PRODUCT_VIEW_ALL_MEDICINE,
    GET_ALTERNATEMEDICINE,
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_TO_CART,
    VIEW_CART_BY_ID,
    VIEW_CART_BY_USER_ID,
    PRESCERIPTION_UPLOAD,

} from "../Api/apiconstants";

import axios from 'axios';

const authservices = {
    GetOtp: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${GETOTP}`, bodyFormData, config);
        return data;
    },
    VerifyOtp: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${VERIFYOTP}`, bodyFormData, config);
        return data;
    },
    View_By_Categorie_Id: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${VIEW_BY_CATEGORIES_ID}`, bodyFormData, config);
        return data;
    },
    All_Categories: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${ALL_CATEGORIES}`, bodyFormData, config);
        return data;
    },
    View_By_Categories: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        console.log(VIEW_BY_CATEGORIES)
        console.log(bodyFormData)
        const data = await axios.post(`${VIEW_BY_CATEGORIES}`, bodyFormData, config);
        return data;
    },
    View_By_Product: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${VIEW_BY_PRODUCT}`, bodyFormData, config);
        return data;
    },
    View_All_Medicine: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${VIEW_ALL_MEDICINE}`, bodyFormData, config);
        return data;
    },
    View_By_Categorie: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${VIEW_BY_CATEGORY}`, bodyFormData, config);
        return data;
    },
    Product_View_By_Medicine: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${PRODUCT_VIEW_BY_MEDICINEID}`, bodyFormData, config);
        return data;
    },

    Product_View_All_Medicine: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${PRODUCT_VIEW_ALL_MEDICINE}`, bodyFormData, config);
        return data;
    },
    Get_Alternatemedicine: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        console.log(GET_ALTERNATEMEDICINE)
        console.log(bodyFormData)
        const data = await axios.post(`${GET_ALTERNATEMEDICINE}`, bodyFormData, config);
        return data;
    },
    Add_Item_To_cart: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        console.log(ADD_ITEM_TO_CART)
        console.log(bodyFormData)
        const data = await axios.post(`${ADD_ITEM_TO_CART}`, bodyFormData, config);
        return data;
    },
    RemoveItemToCart: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        console.log(REMOVE_ITEM_TO_CART)
        console.log(bodyFormData)
        const data = await axios.post(`${REMOVE_ITEM_TO_CART}`, bodyFormData, config);
        return data;
    },
    ViewCartById: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        console.log(VIEW_CART_BY_ID)
        console.log(bodyFormData)
        const data = await axios.post(`${VIEW_CART_BY_ID}`, bodyFormData, config);
        return data;
    },
    View_Cart_By_User_Id: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        console.log(VIEW_CART_BY_USER_ID)
        console.log(bodyFormData)
        const data = await axios.post(`${VIEW_CART_BY_USER_ID}`, bodyFormData, config);
        return data;
    },

    Prescription_Uploaded: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        console.log(PRESCERIPTION_UPLOAD)
        console.log(bodyFormData)
        const data = await axios.post(`${PRESCERIPTION_UPLOAD}`, bodyFormData, config);
        return data;
    },




}
export default authservices;