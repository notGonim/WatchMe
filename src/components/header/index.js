import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkRouter } from 'react-router-dom';
import {
    Container,
    Background,
    ButtonLink,
    Text,
    Logo,
} from './styles/header.styles';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
        <Background data-testid="header-bg" {...restProps}>
            {children}
        </Background>
    ) : (
        children 
    );
}



Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <LinkRouter to={to}>
            <Logo {...restProps} />
        </LinkRouter>
    );
};


Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};


Header.propTypes = {
    children: PropTypes.any,
    bg: PropTypes.any
};

Header.Frame.propTypes = {
    children: PropTypes.any,
};

Header.Logo.propTypes = {
    children: PropTypes.any,
    to: PropTypes.any
};

Header.ButtonLink.propTypes = {
    children: PropTypes.any,
};


Header.Text.propTypes = {
    children: PropTypes.any,
};