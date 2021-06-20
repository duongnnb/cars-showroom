import React from 'react';
import styled from 'styled-components/macro';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/HomPage';

const AppContainer = styled.div`
  ${tw`
w-full
h-full
flex
flex-col
`}
`;

function App(): JSX.Element {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
