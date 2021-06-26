import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ProfileContainer } from './profile.container';
import { Loading } from '../constants/defaults'
import useAuthListener from '../hooks/use-auth-listener';


export function BrowseContainer({ slides }) {
    console.log(slides)

    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const { user } = useAuthListener()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [profile.displayName])


    return profile.displayName ? (
        loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />
    
        ) : (<ProfileContainer  setProfile={setProfile} />)

}




BrowseContainer.propTypes = {
    slides: PropTypes.any,
};
