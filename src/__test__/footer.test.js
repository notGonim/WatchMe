import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../constants/defaults';

describe('<Footer />', () => {

    it('renders the <Footer /> with data', () => {
        const { container, getByText } = render(

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
                <Footer.Text>Netflix Egypt </Footer.Text>
            </Footer>
        )


        expect(getByText('FAQ')).toBeTruthy();
        expect(getByText('Media Center')).toBeTruthy();
        expect(getByText('Account')).toBeTruthy();
        expect(getByText('Terms Of Use')).toBeTruthy();
        expect(getByText('Help Center')).toBeTruthy();
        expect(getByText('Investor Relations')).toBeTruthy();
        expect(getByText('Legal Notice')).toBeTruthy();
        expect(getByText('Speed')).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });
});


