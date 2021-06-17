import React from 'react';
import PropTypes from 'prop-types';

import { Item, Inner, Container, Pane, Title, Image, Subtitle } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item  {...restProps}>
            <Inner direction={direction} >
                {children}
            </Inner>
        </Item>
    )
}


Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container  {...restProps}>{children}</Container>
}


Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane  {...restProps}>{children}</Pane>
}



Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title  {...restProps}>{children}</Title>
}


Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restProps }) {
    return <Subtitle  {...restProps}>{children}</Subtitle>
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image  {...restProps} />
}



Jumbotron.propTypes = {
    children: PropTypes.any,
    direction: PropTypes.any,
};

Jumbotron.Title.propTypes = {
    children: PropTypes.any,
};


Jumbotron.Pane.propTypes = {
    children: PropTypes.any,
};

Jumbotron.Container.propTypes = {
    children: PropTypes.any,
};

Jumbotron.Subtitle.propTypes = {
    children: PropTypes.any,
};
