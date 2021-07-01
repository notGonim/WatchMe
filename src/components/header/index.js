import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
    Container,
    Group,
    Background,
    Dropdown,
    Picture,
    Link,
    Search,
    Profile,
    FeatureCallOut,
    SearchIcon,
    SearchInput,
    ButtonLink,
    PlayButton,
    Text,
    Feature,
    Logo,
} from './styles/header.styles';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
        <Background data-testid="header" {...restProps}>
            {children}
        </Background>
    ) : (
        children
    );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    );
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
                data-testid="search-input"
            />
        </Search>
    );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Dropdown.propTypes = {
    children: PropTypes.any,
};


Header.Picture.propTypes = {
    src: PropTypes.any,
};
Header.Search.propTypes = {
    searchTerm: PropTypes.any,
    setSearchTerm: PropTypes.any,
};

Header.Group.propTypes = {
    children: PropTypes.any,
};

Header.TextLink.propTypes = {
    children: PropTypes.any,
};

Header.PlayButton.propTypes = {
    children: PropTypes.any,
};

Header.propTypes = {
    children: PropTypes.any,
    bg: PropTypes.any
};

Header.Frame.propTypes = {
    children: PropTypes.any,
};

Header.Feature.propTypes = {
    children: PropTypes.any,
};

Header.FeatureCallOut.propTypes = {
    children: PropTypes.any,
};

Header.Logo.propTypes = {
    children: PropTypes.any,
    to: PropTypes.any
};

Header.ButtonLink.propTypes = {
    children: PropTypes.any,
};

Header.Profile.propTypes = {
    children: PropTypes.any,
};

Header.Text.propTypes = {
    children: PropTypes.any,
};