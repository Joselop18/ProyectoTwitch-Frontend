import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
    emailValidationMessage,
    validateEmail,
    validatePasswordMessage,
    validatePassword
} from "../shared/validators";
import { useLogin } from "../shared/hooks";

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin()
    const [fromState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch(field){
            case 'email':
                isValid = validateEmail(value);
                break;
            case 'password':
                isValid = validatePassword(value);
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));
    }

    const handleLogin = (event) => {
        event.preventDefault()
        login(fromState.email.value, fromState.password.value)
    }

    const isSubmitButtonDisabled = isLoading || !fromState.email.isValid || fromState.password.isValid;

    return(
        <div className="login-container">
            <Logo text={'login kinal Cast'}/>
            <form className="auth-from">
                <Input
                    field='email'
                    label='Email'
                    value={fromState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={fromState.email.showError}
                    validationMessage={emailValidationMessage}
                />
                <Input
                    field='password'
                    label='Password'
                    value={fromState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={fromState.password.showError}
                    validationMessage={validatePasswordMessage}
                />
                <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    login
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Don't have an account? SignUp
            </span>
        </div>
    )
}