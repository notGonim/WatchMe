import faqsData from '../fixtures/faqs.json'
import React from 'react';
import { According } from '../constants/defaults'


export function FaqsContainer() {

    return (
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

}
