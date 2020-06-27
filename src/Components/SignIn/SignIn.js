import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput';
import './signin.scss'
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle } from '../../firebase.utils';
import { auth } from 'firebase';

const SignIn = () => {

    const [userCredentials, setUserCredential] = useState({ email: '', password: '' })

    const { email, password } = userCredentials;

    const handelSubmit = async event => {
        event.preventDefault();

        setUserCredential({ email: '', password: '' })

    }

    const handelChange = event => {
        const { value, name } = event.target;
        setUserCredential({ ...userCredentials, [name]: value })
    }


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span> sign in with your email and password</span>
            <form onSubmit={handelSubmit}>
                <FormInput name='email' type="email" label="email" value={email} handelChange={handelChange} required />
                <FormInput name='password' type="password" handelChange={handelChange} label="password" value={password} required />

                <div className="buttons">

                    <CustomButton type="submit" handelChange={handelChange} >Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} handelChange={handelChange} isGooglesignIn >Sign In With Google </CustomButton>
                </div>



            </form>

        </div>
    )

}


export default SignIn;
