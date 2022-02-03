import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { useState } from 'react';

function Login(){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <Wrapper>
            <Logo>CrystaBook</Logo>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
                    <Divider />
                    <p>
                        New?
                        <Button color="secondary" onClick={() => setShowLogin(false)}>
                            Sign up here
                        </Button>
                    </p>
                </>
            ) : (
                <>
                <SignUpForm onLogin={onLogin} />
                <Divider />
                <p>
                    Not new?
                    <Button color="secondary" onClick={() => setShowLogin(true)}>
                        Log in here
                    </Button>
                </p>
                </>
            )}
        </Wrapper>
    )
}

export default Login