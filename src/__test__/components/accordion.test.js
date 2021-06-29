import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import faqsData from '../../fixtures/faqs.json'
import { According } from '../../constants/defaults';


describe('<According />', () => {

    it('renders the <According /> with populated data', () => {
        const { container, getByText } = render(
            <According>
                <According.Title>Frequently Asked Questions</According.Title>
                <According.Frame>
                    {faqsData.map((item) => (
                        <According.Item key={item.id}>
                            <According.Header>{item.header}</According.Header>
                            <According.Body>{item.body}</According.Body>
                        </According.Item>
                    ))}
                </According.Frame>
            </According>
        )
        expect(getByText('Frequently Asked Questions')).toBeTruthy()
        expect(getByText('Where can I watch?')).toBeTruthy()
        expect(container.firstChild).toMatchSnapshot()
    })



    it('open and close the  <According /> ', () => {
        const { container, queryByText } = render(
            <According>
                <According.Title>Frequently Asked Questions</According.Title>
                <According.Frame>
                    {faqsData.map((item) => (
                        <According.Item key={item.id}>
                            <According.Header>{item.header}</According.Header>
                            <According.Body>{item.body}</According.Body>
                        </According.Item>
                    ))}
                </According.Frame>
            </According>
        )
        const whatIsNetflixBodyText =
        "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";
  
      expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
      fireEvent.click(queryByText('What is Netflix?'));
      expect(queryByText(whatIsNetflixBodyText)).toBeTruthy();
  
      fireEvent.click(queryByText('What is Netflix?'));
      expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
      expect(container.firstChild).toMatchSnapshot();
    });




});