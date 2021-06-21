import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profile.style';
import PropTypes from 'prop-types';


export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
};




Profiles.propTypes = {
    children: PropTypes.any,
};

Profiles.Title.propTypes = {
    children: PropTypes.any,
};
Profiles.List.propTypes = {
    children: PropTypes.any,
};
Profiles.User.propTypes = {
    children: PropTypes.any,
};
Profiles.Picture.propTypes = {
    children: PropTypes.any,
    src: PropTypes.any
};
Profiles.Name.propTypes = {
    children: PropTypes.any,
};








