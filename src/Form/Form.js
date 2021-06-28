import React from 'react';
import './Form.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstname:'',
            lastname:'',
            city:'',
            street:'',
            zipcode:'',
            phone:''
        },
        validationSchema :Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().required('Password is required'),
            firstname: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            lastname: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            city: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            street: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required')
        }),
        onSubmit: values => {
           console.log(values);
            fetch('https://reqres.in/api/users',{
                method:"POST",
                body:JSON.stringify(
                    {
                        email: formik.values.email,
                        password: formik.values.password,
                        firstname: formik.values.firstname,
                        lastname:formik.values.lastname,
                        city:formik.values.city,
                        street:formik.values.street,
                        zipcode:formik.values.zipcode,
                        phone:formik.values.phone
                    }
                )
            })
                .then(res=>res.json())
                .then(json=> {
                    console.log(json)
                    setStatus(true);
                })
                .catch(error => console.log(error, 'error'));
        },
    });

    const {status, setStatus}=formik;
    const Welcome =()=> (<div className='welcome'>Congratulations, You have successfully registered</div>)

    return (
        <div>
            {status ? (<Welcome />) : (
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email&&formik.errors.email ? (<div>{formik.errors.email}</div>) : ('')}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.touched.password&&formik.errors.password ? (<div>{formik.errors.password}</div>) : ('')}
                <label htmlFor="firstname">First Name</label>
                <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                />
                {formik.touched.firstname&&formik.errors.firstname ? (<div>{formik.errors.firstname}</div>) : (' ')}
                <label htmlFor="lastname">Last Name</label>
                <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                />
                {formik.touched.lastname&&formik.errors.lastname ? (<div>{formik.errors.lastname}</div>) : (' ')}
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                />
                {formik.touched.city&&formik.errors.city ? (<div>{formik.errors.city}</div>) : (' ')}
                <label htmlFor="street">Street Address</label>
                <input
                    id="street"
                    name="street"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.street}
                />
                {formik.touched.street&&formik.errors.street ? (<div>{formik.errors.street}</div>) : (' ')}
                <label htmlFor="zipcode">ZipCode</label>
                <input
                    id="zipcode"
                    name="zipcode"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.zipcode}
                />
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    name="phone"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
            );
};

export default Form;