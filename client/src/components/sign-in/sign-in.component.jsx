import React, { useState } from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component.jsx";

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';

import {
        emailSignInStart,
        googleSignInStart
      } from '../../redux/user/user.actions';
import { connect } from 'react-redux';


const SignIN = ({ emailSignInStart, googleSignInStart }) => {

    const [userCreadentials ,setCreadentials] = useState({email:'', password:''});
    const { email, password }                 = userCreadentials;
  
    const handleSubmit  = async event => {
        event.preventDefault();
        emailSignInStart(email,password);
    }

    const handleChange = event => {
        const {value, name } = event.target;
        setCreadentials({
            ...userCreadentials,
            [name]: value
        })
    } 

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton
              type = 'button'
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }


const mapDispatchToProps = dispatch => ({
    googleSignInStart  : () => dispatch(googleSignInStart()),
    emailSignInStart   : (email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIN);