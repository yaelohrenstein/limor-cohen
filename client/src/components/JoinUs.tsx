import { textAlign } from '@mui/system';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Main = styled.div({
    backgroundColor: '#F1F5F9',
    padding: '90px 30px',
    height: 'fit-content',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})

const Headline = styled.h2({
    fontSize: '2em',
    color: '#384959',
    textAlign: 'center'
})

const Icons = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
})

const openLink = (link: string) => {
    window.open(link)
}

const JoinUs: React.FC = () => {
  
  return (
    <Main id='joinUs'>
        <Headline>הצטרפו אלי ברשתות החברתיות</Headline>
        <Icons>
            <FaSquareInstagram size={80}/>
            <FaFacebookSquare size={80} onClick={() => window.open('https://www.facebook.com/razsagi.il')}/>
        </Icons>
    </Main>
  );
};

export default JoinUs