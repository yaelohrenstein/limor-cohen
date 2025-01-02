import { textAlign } from '@mui/system';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { iMember } from '../../public/assets/types/Member';
import Member from './Member';
import {membersInfo} from '../info/members'
const Main = styled.div({
    backgroundColor: '#88BDF2',
    padding: '30px 30px',
    height: 'fit-content',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
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
    color: '#F1F5F9'
})

const Description = styled.div({
    // textAlign: 'center'
})

const MembersBoxs = styled.div({
    display: 'flex',
    flexDirection: 'row'
})

const Members: React.FC = () => {
  
  return (
    <Main id='members'>
        <Headline>חברי הסיעה</Headline>
        <MembersBoxs>
            {
                membersInfo.map((member: iMember) => (
                    <Member member={member}></Member>
                ))
            }
        </MembersBoxs>
    </Main>
  );
};

export default Members;