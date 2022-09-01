import React from "react"
import { useFormik } from 'formik';
const SignupForm = ({setEmail, setPassword, handleAction}) => {
    
    const formik = useFormik({
        initialValues: {
            email : "",
            password: "",
            rePassword: "",
        },
        onSubmit: values => {
            setEmail(values.email)
            setPassword(values.password)
            handleAction(2)
        }

    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}
            className="flex flex-col mt-8 gap-y-3 max-w-md">
                <input className="p-4 text-dark-blue text-2xl font-medium bg-gray
                shadow-md rounded-sm focus:outline focus:outline-offset-2 
                focus:outline-dark-blue" 
                type="email" name="email" placeholder="username"
                value={formik.values.email} onChange={formik.handleChange}/> 
                
                 <input className="p-4 text-dark-blue text-2xl font-medium bg-gray
                shadow-md rounded-sm focus:outline focus:outline-offset-2 
                focus:outline-dark-blue" 
                type="password" name="password" placeholder="password"
                value={formik.values.password} onChange={formik.handleChange}/>

                <input className="p-4 text-dark-blue text-2xl font-medium bg-gray
                shadow-md rounded-sm focus:outline focus:outline-offset-2 
                focus:outline-dark-blue" 
                type="password" name="rePassword" placeholder="re-type password"
                value={formik.values.rePassword} onChange={formik.handleChange}/> 
                
                <button className="p-4 text-2xl font-bold bg-dark-blue 
                text-white rounded-sm shadow-md" type="submit">Login</button>
            </form>
        </div>
    )

}

export default SignupForm
