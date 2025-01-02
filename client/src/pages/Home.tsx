import React, { useState } from 'react';
import { styled } from 'styled-components';
import About from '../components/About';
import Members from '../components/Members';

const Main = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  height: '100vh'
})

const Home: React.FC = () => {
  return (
    <Main>
        <About></About>
        <Members></Members>
    </Main>
  );    
};

export default Home;