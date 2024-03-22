import Login from "./Login"
import React from "react"

function Validation(values){
   
    let error ={}
    const email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const password_patten =  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if( values.email === ""){
        error.email ="Email Should Not Be Empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email Did't match"
    }
    else{
        error.email=""
    }


    if(values.password ===""){
        error.password ="Password Should Not Be Empty"
    }
    else if(!password_patten.test(values.password)){
        error.password ="password did't match"
    }
    else{
        error.password=""
    }
    return error;
}

export default Validation;