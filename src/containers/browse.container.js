import React from 'react';
import PropTypes from 'prop-types';



export function BrowseContainer({ slides }) {

    console.log(slides)
    return <p>This is the browse container </p>


}




BrowseContainer.propTypes = {
    slides: PropTypes.any,
};
