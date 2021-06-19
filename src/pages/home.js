import React from 'react';
import { JumbotronsContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faqs'
import { HeaderContainer } from '../containers/header.container'
import { Form } from '../constants/defaults'
import { Feature } from '../constants/defaults'


export default function Home() {

    return (

        <>
            <HeaderContainer >

                <Feature>
                    <Feature.Title>Unlimited films,tv programs and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel any time</Feature.SubTitle>
                    <Form >
                        <Form.Input placeholder="Email Address" />
                        <Form.Button>Try it now</Form.Button>
                        <Form.Text>Ready to watch? Enter your email to create or restart your membership</Form.Text>
                    </Form>
                </Feature>
            </HeaderContainer>
            <JumbotronsContainer />
            <FooterContainer />
            <FaqsContainer />
        </>
    )
}

