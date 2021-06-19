import React from 'react';
import PropTypes from 'prop-types';

import { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit } from './styles/login-form.styles';


export default function LoginForm({ children, ...restProps }) {
    return (
        <Container  {...restProps}> {children}</Container>
    )
}

LoginForm.Error = function LoginFormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>
}

LoginForm.Base = function LoginFormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

LoginForm.Title = function LoginFormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

LoginForm.Text = function LoginFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

LoginForm.TextSmall = function LoginFormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

LoginForm.Link = function LoginFormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

LoginForm.Input = function LoginFormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

LoginForm.Submit = function LoginFormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}

LoginForm.propTypes = {
    children: PropTypes.any,
};

LoginForm.Text.propTypes = {
    children: PropTypes.any,
};


LoginForm.Error.propTypes = {
    children: PropTypes.any,
};

LoginForm.TextSmall.propTypes = {
    children: PropTypes.any,
};

LoginForm.Title.propTypes = {
    children: PropTypes.any,
};

LoginForm.Base.propTypes = {
    children: PropTypes.any,
};

LoginForm.Submit.propTypes = {
    children: PropTypes.any,
};

LoginForm.Link.propTypes = {
    children: PropTypes.any,
};

LoginForm.Input.propTypes = {
    children: PropTypes.any,
};