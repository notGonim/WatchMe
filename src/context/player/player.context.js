import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PlayerContext = createContext(
    {
        showPlayer: false,
        setShowPlayer: () => { }
    }
)


const PlayerProvider = ({ children }) => {

    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }} >
            {children}
        </PlayerContext.Provider>
    )

}


PlayerProvider.propTypes = {
    children: PropTypes.any,
};


export default PlayerProvider