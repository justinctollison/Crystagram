import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { useState } from 'react';

function Login({ onLogin }){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <wrapper>
            <logo>CrystaBook</logo>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
                    <divider />
                    <p>
                        New?
                        <button color="secondary" onClick={() => setShowLogin(false)}>
                            Sign up here
                        </button>
                    </p>
                </>
            ) : (
                <>
                <SignUpForm onLogin={onLogin} />
                <divider />
                <p>
                    Not new?
                    <button color="secondary" onClick={() => setShowLogin(true)}>
                        Log in here
                    </button>
                </p>
                </>
            )}
        </wrapper>
    )
}

export default Login;