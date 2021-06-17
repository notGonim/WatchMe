import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ToggleContext = createContext(
    {
        toggleShow: false,
        setToggleShow: () => { }
    }
)


const ToggleProvider = ({ children }) => {

    const [toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }} >
            {children}
        </ToggleContext.Provider>
    )

}


ToggleProvider.propTypes = {
    children: PropTypes.any,
};


export default ToggleProvider