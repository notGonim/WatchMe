import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, SubTitle } from './styles/feature.styles';

export default function Feature({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};





Feature.propTypes = {
    children: PropTypes.any,
};

Feature.Title.propTypes = {
    children: PropTypes.any,
};

Feature.SubTitle.propTypes = {
    children: PropTypes.any,
};
