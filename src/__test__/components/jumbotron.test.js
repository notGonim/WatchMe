import React from 'react';
import { render } from '@testing-library/react';
import jumboData from '../../fixtures/jumbo.json';
import { Jumbotron } from '../../constants/defaults';

describe('<Jumbotron />', () => {
    it('renders the <Jumbotron /> with populated data', () => {
      const { container, getByText, getByAltText, getByTestId } = render(
        <Jumbotron.Container>
          {jumboData.map((item) => (
            <Jumbotron key={item.id}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} alt={item.alt} data-testid={`${item.id}-jumbo-image`} />
              </Jumbotron.Pane>
            </Jumbotron>
          ))}
        </Jumbotron.Container>
      );
  
      expect(getByText('Enjoy on your TV.')).toBeTruthy();
      expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
      expect(getByTestId('1-jumbo-image')).toBeTruthy();
     
      expect(container.firstChild).toMatchSnapshot();
    });
  });