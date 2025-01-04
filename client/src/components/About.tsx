import { textAlign } from '@mui/system';
import React, { useState } from 'react';
import { styled } from 'styled-components';

const Main = styled.div({
    backgroundColor: 'F1F5F9',
    padding: '30px 30px',
    height: '200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center'
})

const Img = styled.img({
    width: '10em',
    height: '10em'
})

const Text = styled.div({
    display: 'flex', 
    flexDirection: 'column',
    textAlign: 'center'
})

const Headline = styled.h2({
    fontSize: '2em',
    color: '#384959'
})

const Description = styled.div({
    marginRight: '20px'
})

const About: React.FC = () => {
  
  return (
    <Main id='about'>
        <Img src='/assets/images/raz.jpeg'></Img>
        <Text>
            <Headline> אודותי </Headline>
            <Description>
                אל"מ (מיל') רז שגיא, נשוי ואב לשלושה. מכהן כראש עיריית ראש העין מחודש מרץ 2024
            </Description>
        </Text>
    </Main>
  );
};

export default About;