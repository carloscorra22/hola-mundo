import React from 'react';
import {Formik , Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


const loginEsquema = Yup.object().shape(
    {
        email: Yup.string()
            .email('email format invalid')
            .required('email is required'),
        password: Yup.string()
            .required('password is required')
    }
);



const LogingFormik = () => {

    const initialCredentials = {
        email:'',
        password:''
    }
    const navegate = useNavigate();


    return (
        <div>
        <h4>Login</h4>
        <Formik 
        initialValues = { initialCredentials }
        validationSchema = { loginEsquema }
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
            localStorage.setItem('credentials', values);
            await localStorage.setItem('credentials', values);
                    navegate('/profile');
        }}>

        {({ errors, touched, isSubmitting , handleChange, handleBlur }) => (
                            <Form>
                                <label htmlFor="email">Email</label>
                                <Field id="email" type='email' name="email" placeholder="example@email.com" />

                                    {
                                        errors.email && touched.email && (
                                            <div>
                                            <ErrorMessage name='email'></ErrorMessage>                                                
                                            </div>

                                        )
                                    }

                                <label htmlFor="password">Password</label>
                                <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                                />

                                    {
                                        errors.password && touched.password && (
                                            <div>
                                            <ErrorMessage name='password'></ErrorMessage>                                                
                                            </div>

                                        )
                                    }
                                <button type="submit">Submit</button>

                                {isSubmitting ? <p>login your credentials</p>:null}
                            </Form> 
)
}
       
        </Formik>            
        </div>

    );
}

export default LogingFormik;
