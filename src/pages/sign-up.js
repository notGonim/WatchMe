import React, { useContext, useState } from 'react';
import { HeaderContainer } from '../containers/header.container'
import { FooterContainer } from '../containers/footer';
import { LoginForm as SignUpForm } from '../constants/defaults';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase/firebase.context';
import * as ROUTES from '../constants/routes';

export default function SignUp() {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)


    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();

        return firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE);
                    })
            )
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };

    return (

        <>
            <HeaderContainer>
                <SignUpForm>
                    <SignUpForm.Title>Sign Up</SignUpForm.Title>
                    {error && <SignUpForm.Error>{error}</SignUpForm.Error>}

                    <SignUpForm.Base onSubmit={handleSignup} method="POST">
                        <SignUpForm.Input
                            placeholder="First name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <SignUpForm.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <SignUpForm.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <SignUpForm.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
                            Sign Up
                        </SignUpForm.Submit>
                    </SignUpForm.Base>

                    <SignUpForm.Text>
                        Already a user? <SignUpForm.Link to={ROUTES.SIGN_IN}>Sign in now.</SignUpForm.Link>
                    </SignUpForm.Text>
                    <SignUpForm.TextSmall>
                        This page is protected by WatchMe SecurityBot to ensure you`re not a bot. Learn more.
                    </SignUpForm.TextSmall>
                </SignUpForm>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
