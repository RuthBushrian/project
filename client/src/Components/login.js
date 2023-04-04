import React, { useRef, useState } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { Card } from "primereact/card";
import { Password } from 'primereact/password';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
import { useNavigate } from "react-router-dom"

import axios from 'axios';


export default function Login() {

const navigate = useNavigate();


  const handleLogin = async () => {
    console.log("handleLogin");
    try {
    //   const response = await refetch();
    const response= await axios.get(`http://localhost:4321/officer/${formik.values.userName}/${formik.values.password}`)  
    console.log(response.data);
    navigate("/openfile")

    } 
    catch (e) {
      console.log(e);
    }
  };

    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.userName });
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.password });
    };

    const formik = useFormik({
        initialValues: {
            userName: "",
            password: ""
        },
        validate: (data) => {
            let errors = {};

            if (!data.userName) {
              errors.userName = 'קוד משתמש נדרש';
            }
            if (!data.password) {
                errors.password = 'סיסמא נדרשת';
            }
            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <Card style={{ width: "30%", margin: "5%" , textAlign:"center"}} title="כניסה למערכת " >
                <div className="card flex justify-content-center">
                    <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                        <span className="p-float-label">
                            <Toast ref={toast} />
                            <InputText
                                id="userName"
                                name="userName"
                                value={formik.values.buildingId}
                                onChange={(e) => {
                                    formik.setFieldValue('userName', e.target.value);
                                }}
                                className={classNames({ 'p-invalid': isFormFieldInvalid('userName') })}
                                style={{ width:"100%" }}
                            />
                            <label htmlFor="userName">שם משתמש</label>
                        </span>
                        {getFormErrorMessage('userName')}

            

                        <span className="p-float-label">
                            <Toast ref={toast} />
                            <Password
                                id="password"
                                name="password"
                                value={formik.values.password}
                                onChange={(e) => formik.setFieldValue('password', e.target.value)}
                                toggleMask
                                className={classNames({ 'p-invalid': isFormFieldInvalid('password') })}
                                feedback= {false}
                            />

                            <label htmlFor="input_value">סיסמא</label>
                        </span>
                        {getFormErrorMessage('password')}

                            <Button
                              //label={loading ? 'Loading' : 'Login'}
                              label="Login"
                              icon="pi pi-user"
                              className="w-10rem mx-auto"
                            // disabled={loading}
                              onClick={handleLogin}
                            />
                    </form>
                </div>
            </Card>
        </div>
    )
}