import React from 'react';
import './Registracion.css';
import  {useFormik } from 'formik';
import * as Yup from 'yup';
import Form from "./Form";

const Registration = () => {
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
        <div> {status ? (<Welcome />) : (<Form formik={formik} /> ) } </div>
    )
};

export default Registration;