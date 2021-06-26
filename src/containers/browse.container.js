import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ProfileContainer } from './profile.container';
import { Loading, Header } from '../constants/defaults'
import useAuthListener from '../hooks/use-auth-listener';
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase/firebase.context';


export function BrowseContainer({ slides }) {
    console.log(slides)

    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const { user } = useAuthListener()
    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);
console.log(slideRows)
    const { firebase } = useContext(FirebaseContext);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category]);
      }, [slides, category]);
    

    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
            <Header src="joker1">
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={process.env.PUBLIC_URL + "./images/logo.svg"} alt="watch-me" />
                        <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
                            Series
                        </Header.TextLink>
                        <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
                            Films
                        </Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he`s part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
        </>) : <ProfileContainer setProfile={setProfile} />


}




BrowseContainer.propTypes = {
    slides: PropTypes.any,
};
