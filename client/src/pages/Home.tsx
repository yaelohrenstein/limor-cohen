import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Cposts } from '../assets/cultureSports/posts';
import { Dposts } from '../assets/development/posts';
import { Eposts } from '../assets/education/posts';
import { ESposts } from '../assets/environmentalStruggles/posts';
import { Gposts } from '../assets/general/posts';
import { Sposts } from '../assets/security/posts';
import About from '../components/About';
import JoinUs from '../components/JoinUs';
import Members from '../components/Members';
import Posts from '../components/Posts';

const Main = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  // height: '100vh',
})

const Home: React.FC = () => {
  return (
    <Main>
        <About></About> 
        <div>mmjkm</div>
        <Posts posts={Eposts} backroundColor='#88BDF2' textColor='#F1F5F9' headline='חינוך'></Posts>
        <Posts posts={Gposts} backroundColor='#F1F5F9' textColor='#384959' headline='כללי'></Posts>
        <Posts posts={Dposts} backroundColor='#88BDF2' textColor='#F1F5F9' headline='פיתוח'></Posts>
        <Posts posts={Sposts} backroundColor='#F1F5F9' textColor='#384959' headline='ביטחון'></Posts> 
        <Posts posts={ESposts} backroundColor='#88BDF2' textColor='#F1F5F9' headline='מאבקים סביבתיים'></Posts>
        <Posts posts={Cposts} backroundColor='#F1F5F9' textColor='#384959' headline='תרבות וספורט'></Posts> 
        <Members></Members>
        <JoinUs></JoinUs>
    </Main>
  );    
};

export default Home;