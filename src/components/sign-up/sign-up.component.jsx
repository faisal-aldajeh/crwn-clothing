import React, { useReducer } from 'react';
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth ,createUserProfileDocumnet} from "../../firebase/firebase.utils";


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName      : '',
            email            : '',
            password         : '',
            confirmPassword  : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if (password != confirmPassword)
        {
            alert("password don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocumnet(user , { displayName });
            this.setState({
                displayName      : '',
                email            : '',
                password         : '',
                confirmPassword  : ''
            });

        } catch (error ) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {value, name } = event.target;
        this.setState({
            [name]: value
        });
    } 

    render() {
        return (
            <div className = 'sign-up'>
                <h2> I do not have an account</h2>
                <span> Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type         = "text"
                        name         = 'displayName'
                        value        = {this.state.displayName}
                        handleChange = {this.handleChange}
                        label        = 'Display Name'
                        required
                    />

                    <FormInput
                        type         = "email"
                        name         = 'email'
                        value        = {this.state.email}
                        handleChange = {this.handleChange}
                        label        = 'Email'
                        required
                    />

                    <FormInput 
                        type         = "password"
                        name         = 'password'
                        value        = {this.state.password}
                        handleChange = {this.handleChange}
                        label        = 'Password'
                        required
                    />

                    <FormInput 
                        type         = "password"
                        name         = 'confirmPassword'
                        value        = {this.state.confirmPassword}
                        handleChange = {this.handleChange}
                        label        = 'Confirm Password'
                        required
                    />

                    <CustomButton type="submit"> Sign Up </CustomButton>
              </form>
            </div>
        )
    }

}

export default SignUp;

