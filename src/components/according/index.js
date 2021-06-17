import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Title, Frame, Item, Header, Container, Inner, Body } from './styles/according'


export const toggleContext = createContext()

export default function According({ children, ...restProps }) {

    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>

    )
}

According.Title = function AccordingTitle({ children, ...restProps }) {
    return <Title  {...restProps}> {children}</Title>
}


According.Frame = function AccordingFrame({ children, ...restProps }) {
    return <Frame  {...restProps}> {children}</Frame>
}


According.Item = function AccordingItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <toggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item  {...restProps}> {children}</Item>
        </toggleContext.Provider>
    )
}
According.Header = function AccordingHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(toggleContext)

    return <Header onClick={() => setToggleShow(!toggleShow)}{...restProps}>
        {children}
        {toggleShow ? (
            <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
            <img src="/images/icons/add.png" alt="Open" />
        )}
    </Header>
}

According.Body = function AccordingFrame({ children, ...restProps }) {
    const { toggleShow } = useContext(toggleContext)
    return toggleShow ? <Body {...restProps}> {children}</Body> : null
}



According.propTypes = {
    children: PropTypes.any,
};

According.Title.propTypes = {
    children: PropTypes.any,
};
According.Body.propTypes = {
    children: PropTypes.any,
};
According.Frame.propTypes = {
    children: PropTypes.any,
};

According.Header.propTypes = {
    children: PropTypes.any,
};

According.Item.propTypes = {
    children: PropTypes.any,
};
