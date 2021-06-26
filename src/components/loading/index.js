import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading.styles';
import PropTypes from 'prop-types';


export default function Loading({ src, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
        </Spinner>
    );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />;
};





Loading.propTypes = {
    src: PropTypes.any,
};
