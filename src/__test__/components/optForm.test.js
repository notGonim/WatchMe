import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../constants/defaults';

describe('<OptForm />', () => {
    it('renders the <OptForm /> with populated data', () => {
        const { container, getByText, getByPlaceholderText } = render(
            <Form>
                <Form.Input placeholder="Email address" />
                <Form.Button>Try it now</Form.Button>
                <Form.Break />
                <Form.Text>Ready to watch? Enter your email to create or restart your membership.</Form.Text>
            </Form>
        );

        expect(getByText('Try it now')).toBeTruthy();
        expect(getByText('Ready to watch? Enter your email to create or restart your membership.')).toBeTruthy();
        expect(getByPlaceholderText('Email address')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    
    
    
    })
})
