import React from "react";
import DropdownAlert from 'react-native-dropdownalert';

let dropDownAlert;

 function setDropDownAlert(ref) {
   dropDownAlert = ref;
 }
 
 function alert(type, title, message) {
    dropDownAlert.alertWithType(type, title, message);
 }

 export default {
   dropDownAlert,
   alert,
   setDropDownAlert,
 }