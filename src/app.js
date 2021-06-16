import React from 'react';
import Jumbotron from './components/jumbotron/'
import JumboData from './fixtures/jumbo'
export default function App() {



  return (
    <Jumbotron.Container>
      {JumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title} </Jumbotron.Title>
            <Jumbotron.Subtitle> {item.subTitle} </Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}


