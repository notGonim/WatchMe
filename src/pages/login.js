import React, { useContext, useState } from 'react';
import { HeaderContainer } from '../containers/header.container'
import { FooterContainer } from '../containers/footer';
import { LoginForm } from '../constants/defaults';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase/firebase.context';
import * as ROUTES from '../constants/routes';


export default function Login() {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignin = (event) => {

        event.preventDefault();

        return firebase.auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });

    };

    return (
        <>
            <HeaderContainer>
                <LoginForm>
                    <LoginForm.Title>Sign In</LoginForm.Title>
                    {error && <LoginForm.Error data-testid="error">{error}</LoginForm.Error>}

                    <LoginForm.Base onSubmit={handleSignin} method="POST">
                        <LoginForm.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <LoginForm.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <LoginForm.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
                            Sign In
                        </LoginForm.Submit>
                    </LoginForm.Base>

                    <LoginForm.Text>
                        New to Netflix? <LoginForm.Link to={ROUTES.SIGN_UP}>Sign up now.</LoginForm.Link>
                    </LoginForm.Text>
                    <LoginForm.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you`re not a bot. Learn more.
                    </LoginForm.TextSmall>
                </LoginForm>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
