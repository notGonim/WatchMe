import faqsData from '../fixtures/faqs.json'
import React from 'react';
import { According } from '../constants/defaults'
import { Form } from '../constants/defaults'


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
            <Form >
                <Form.Input placeholder="Email Address" />
                <Form.Button>Try it now</Form.Button>
                <Form.Break />
                <Form.Text>Ready to watch? Enter your email to create or restart your membership</Form.Text>
            </Form>
        </According>
    )

}
