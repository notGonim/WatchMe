import React from 'react';
import { JumbotronsContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faqs'
import { HeaderContainer } from '../containers/header.container'


export default function Home() {

    return (

        <>
            <HeaderContainer />
            <JumbotronsContainer />
            <FooterContainer />
            <FaqsContainer />
        </>
    )
}

