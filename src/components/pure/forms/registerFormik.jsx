import React from 'react';
import { user } from '../../../models/user.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Roles } from '../../../models/roles.enum';

const RegisterFormik = () => {

    const initialValues = {
        username: '',
        email:'',
        password:'',
        confirm:'',
        role: Roles.USER

    }

    const registerSchema = Yup.object().shape(
        {
        username: Yup.string()
            .min(6, 'too short')
            .max(8, 'too long')
            .required('username is required')
            ,
        email: Yup.string()
            .email('email format invalid')
            .required('email is required'),
        role: Yup.string().oneOf([Roles.USER,Roles.ADMIN],"you must select a role : user/admin")
            .required('role es required'),
        password: Yup.string()
            .min(8, 'too short')
            .required('password is required'),
        confirm: Yup.string()
            .when("password",{
                is: value => (value && value.length >0 ? true:false),
                then: Yup.string().oneOf([
                    Yup.ref("password")],
                    'passwords not mach'
                    ),
            }).required('you must to confirm the password')
        }
    )

    const sumit = (values) => {
        alert ('register user');
    }

    return (
        <div>
            <h4> Register form</h4>
            <Formik
            initialValues={initialValues}
            validationSchema = { registerSchema }
            onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
        }}>

            {({values,        
                touched,  
                errors,
                isSubmitting , 
                handleChange, 
                handleBlur }) => (
                
                    <Form>
                    <label htmlFor="username">Username</label>
                        <Field id="username" type='text' name="username" placeholder="username" />
                        { errors.username && touched.username && (
                                <div>
                                    <ErrorMessage name='username'></ErrorMessage>                                                
                                </div>
                                )}
                    <label htmlFor="email">Email</label>
                        <Field id="email" type='email' name="email" placeholder="example@email.com" />

                        { errors.email && touched.email && (
                                <div>
                                    <ErrorMessage name='email'></ErrorMessage>                                                
                                </div>
                                )}
                                    
                    <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="password" type="password" />

                        { errors.password && touched.password && (
                                <div>
                                  <ErrorMessage name='password'></ErrorMessage>                                                
                                </div>
                                )}
                    <label htmlFor="confirm">Password</label>
                        <Field id="confirm" name="confirm" placeholder="confirm" type="password" />

                        { errors.confirm && touched.confirm && (
                                <div>
                                  <ErrorMessage name='confirm'></ErrorMessage>                                                
                                </div>
                                )}

                    <button type="submit">register</button>
                        {isSubmitting ? <p>sending your credentials</p>:null}
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default RegisterFormik;
