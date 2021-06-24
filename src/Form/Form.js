import React from 'react';
import './Form.css';
import { useFormik } from 'formik';

const Form = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name:{
                firstname:'',
                lastname:''
                },
            address:{
                city:'',
                street:'',
                zipcode:'',
            },
            phone:''
        },
        onSubmit: values => {
           console.log(values);
            fetch('https://fakestoreapi.com/users',{
                method:"POST",
                body:JSON.stringify(
                    {
                        email: values,
                        username:'johnd',
                        password:'m38rmF$',
                        name:{
                            firstname:'John',
                            lastname:'Doe'
                        },
                        address:{
                            city:'kilcoole',
                            street:'7835 new road',
                            number:3,
                            zipcode:'12926-3874',
                            geolocation:{
                                lat:'-37.3159',
                                long:'81.1496'
                            }
                        },
                        phone:'1-570-236-7033'
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json));
        },

    });



    return (
        <div>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <label htmlFor="name.firstname">First Name</label>
                <input
                    id="name.firstname"
                    name="name.firstname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name.firstname}
                />
                <label htmlFor="name.lastname">Last Name</label>
                <input
                    id="name.lastname"
                    name="name.lastname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name.lastname}
                />
                <label htmlFor="address.city">City</label>
                <input
                    id="address.city"
                    name="address.city"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address.city}
                />
                <label htmlFor="address.street">Street Address</label>
                <input
                    id="address.street"
                    name="address.street"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address.street}
                />
                <label htmlFor="address.zipcode">ZipCode</label>
                <input
                    id="address.zipcode"
                    name="address.zipcode"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.address.zipcode}
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
        </div>
    );
};

export default Form;