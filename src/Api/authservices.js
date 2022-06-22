import {
    GETOTP,
    VERIFYOTP,
    VIEW_BY_CATEGORIES_ID,
    ALL_CATEGORIES,
    VIEW_BY_CATEGORIES,
    MEDICINE_CATEGORY_VIEW_ALL,
    VIEW_BY_PRODUCT,
    VIEW_ALL_MEDICINE_PRODUCT,
    VIEW_BY_MEDICINE_ID,
    PRODUCT_VIEW_BY_MEDICINEID,
    PRODUCT_VIEW_ALL_MEDICINE,
    GET_ALTERNATEMEDICINE,
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_TO_CART,
    VIEW_CART_BY_ID,
    VIEW_CART_BY_USER_ID,
    PRESCERIPTION_UPLOAD,
    STORE_LOCATION_VIEW_ALL,
    USER_ADDRESS_DELETE,
    USER_VIEW_BY_ID,
    PINCODE,
    VIEW_ALL_MEDICINE,
    CALLREQUEST,
    USER_PRESCRIPTION_UPLOAD,
    UPDATE_USERNAME,
    CLICKHERE_OFFER,
    CONTACT_US

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
        const data = await axios.post(`${VIEW_BY_CATEGORIES}`, bodyFormData, config);
        return data;
    },
    
    Medicine_Category_View_All: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${MEDICINE_CATEGORY_VIEW_ALL}`, bodyFormData, config);
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
        const data = await axios.post(`${VIEW_ALL_MEDICINE_PRODUCT}`, bodyFormData, config);
        return data;
    },
    View_By_Medicine_id: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        console.log(VIEW_BY_MEDICINE_ID)
        console.log(bodyFormData)
        const data = await axios.post(`${VIEW_BY_MEDICINE_ID}`, bodyFormData, config);
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

        const data = await axios.post(`${PRESCERIPTION_UPLOAD}`, bodyFormData, config);
        return data;
    },
    Store_Location_View_all: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${STORE_LOCATION_VIEW_ALL}`, bodyFormData, config);
        return data;
    },
    User_address_delete: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        console.log('ADDRESSS ',bodyFormData)
        console.log('ADDRESSSDATA HERE ',USER_ADDRESS_DELETE)
        const data = await axios.post(`${USER_ADDRESS_DELETE}`, bodyFormData, config);
        return data;
    },
    View_By_userID: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${USER_VIEW_BY_ID}`, bodyFormData, config);
        return data;
    },
   Pincode: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${PINCODE}`, bodyFormData, config);
        return data;
    },
   All_Medicine: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        console.log(VIEW_ALL_MEDICINE)
        const data = await axios.post(`${VIEW_ALL_MEDICINE}`, bodyFormData, config);
        return data;
    },
    Call_Request: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${CALLREQUEST}`, bodyFormData, config);
        return data;
    },
   User_Prescription_upload: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${USER_PRESCRIPTION_UPLOAD}`, bodyFormData, config);
        return data;
    },
    Update_user_Name: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        console.log('name here ',UPDATE_USERNAME)
        console.log('name url here',bodyFormData)
        const data = await axios.post(`${UPDATE_USERNAME}`, bodyFormData, config);
        return data;
    },
    Click_Here_Offer: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${CLICKHERE_OFFER}`, bodyFormData, config);
        return data;
    },
    Contact_Us: async (bodyFormData) => {
        const config = {
            headers: {
                'Content-Type': `application/json`,
            },
        };
        const data = await axios.post(`${CONTACT_US}`, bodyFormData, config);
        return data;
    },

}
export default authservices;