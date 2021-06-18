import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Button,Text,Break } from './styles/form'


export default function Form({ children, ...restProps }) {


    return (
        <Container  {...restProps}>{children}</Container>
    )
}

Form.Input = function FormInput({  ...restProps }) {
    return <Input  {...restProps} />
}


Form.Button = function FormButton({ children, ...restProps }) {
    return (<Button  {...restProps}>{children} <img src={process.env.PUBLIC_URL + "/images/icons/chevron-right.png"} alt='try now' /></Button>)
}

Form.Text = function FormText({ children, ...restProps }) {
    return (<Text  {...restProps}>{children}</Text>)
}

Form.Break = function FormBreak({ children, ...restProps }) {
    return (<Break  {...restProps}>{children}</Break>)
}


Form.propTypes = {
    children: PropTypes.any,
};

Form.Text.propTypes = {
    children: PropTypes.any,
};

Form.Break.propTypes = {
    children: PropTypes.any,
};
Form.Input.propTypes = {
    children: PropTypes.any,
};

Form.Button.propTypes = {
    children: PropTypes.any,
};
