import React from 'react';
import { Footer } from '../constants/defaults'


export function FooterContainer() {

    return (

        <Footer>
            <Footer.Title>Questions?</Footer.Title>
            <Footer.Break>
                <Footer.Row>

                    <Footer.Column>
                        <Footer.Link href="#"> FAQ  </Footer.Link>
                        <Footer.Link href="#"> Investor Relations  </Footer.Link>
                        <Footer.Link href="#">   Ways To Watch</Footer.Link>
                        <Footer.Link href="#">   Corporate Information</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#"> Help Center  </Footer.Link>
                        <Footer.Link href="#"> Jobs  </Footer.Link>
                        <Footer.Link href="#">   Terms Of Use</Footer.Link>
                        <Footer.Link href="#">   Contact Us</Footer.Link>
                    </Footer.Column>


                    <Footer.Column>
                        <Footer.Link href="#"> Account  </Footer.Link>
                        <Footer.Link href="#"> Privacy </Footer.Link>
                        <Footer.Link href="#">   Speed</Footer.Link>
                        <Footer.Link href="#">   Redeem Gift Cards</Footer.Link>
                    </Footer.Column>


                    <Footer.Column>
                        <Footer.Link href="#">Media Center  </Footer.Link>
                        <Footer.Link href="#">Buy Gift Cards</Footer.Link>
                        <Footer.Link href="#"> Cookies</Footer.Link>
                        <Footer.Link href="#">Legal Notice</Footer.Link>
                    </Footer.Column>

                </Footer.Row>
            </Footer.Break>
            <Footer.Text>Watch-Me Egypt </Footer.Text>
        </Footer>
    )

}