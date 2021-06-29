import React from 'react';
import {FormikProvider, Field, ErrorMessage} from "formik";

const Form = ({formik}) => {
    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} >
                    <label htmlFor="email">Email Address</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name='email'/>

                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password"  />
                    <ErrorMessage name='password'/>

                    <label htmlFor="firstname">First Name</label>
                    <Field type="text" name="firstname"  />
                    <ErrorMessage name='firstname'/>

                    <label htmlFor="lastname">Last Name</label>
                    <Field type="text" name="lastname"  />
                    <ErrorMessage name='lastname'/>

                    <label htmlFor="city">City</label>
                    <Field type="text" name="city"  />
                    <ErrorMessage name='city'/>

                    <label htmlFor="street">Street Address</label>
                    <Field type="text" name="street"  />
                    <ErrorMessage name='street'/>

                    <label htmlFor="zipcode">ZipCode</label>
                    <Field type="number" name="zipcode"  />

                    <label htmlFor="phone">Phone Number</label>
                    <Field type="number" name="phone"  />

                    <button type="submit" >Submit</button>
                </form>
            </FormikProvider>

        </div>
    );
};

export default Form;