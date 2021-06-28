import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import PlayerProvider, { PlayerContext } from '../../context/player/player.context';
import { Container, Button, Overlay, Inner, Close } from './styles/player.styles';
import PropTypes from 'prop-types';



export default function Player({ children, ...restProps }) {

    return (
        <PlayerProvider>
            <Container {...restProps}>{children}</Container>
        </PlayerProvider >
    )
}





Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return showPlayer
        ? ReactDOM.createPortal(
            <Overlay {...restProps} onClick={() => setShowPlayer(false)} data-testid="player">
                <Inner>
                    <video id="netflix-player" controls>
                        <source src={src} type="video/mp4" />
                    </video>
                    <Close />
                </Inner>
            </Overlay>,
            document.body
        )
        : null;
};



Player.Button = function PlayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return (
        <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps}>
            Play
        </Button>
    );
};


Player.Video.propTypes = {
    children: PropTypes.any,
};


Player.Button.propTypes = {
    children: PropTypes.any,
};


Player.propTypes = {
    children: PropTypes.any,
};
