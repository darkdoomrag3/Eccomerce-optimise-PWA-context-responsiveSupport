import React from 'react'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'
import { SignInAndSignUpContainer } from './sign-in-and-signup-style';

const SignInAndSignUp = () => {
    return (

        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />

        </SignInAndSignUpContainer>

    )
}

export default SignInAndSignUp
