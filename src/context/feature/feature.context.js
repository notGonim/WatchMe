import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FeatureContext = createContext(
    {
        showFeature: false,
        setShowFeature: () => { },
        itemFeature: {},
        setItemFeature: () => { },
    }
)


const FeatureProvider = ({ children }) => {

    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});


    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }} >
            {children}
        </FeatureContext.Provider>
    )

}

FeatureProvider.propTypes = {
    children: PropTypes.any,
};


export default FeatureProvider