import { textAlign } from '@mui/system';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import Member from './Member';
import {membersInfo} from '../info/members'
import { useAppContext } from '../AppContext';
import { iMember } from '../assets/types/Member';
const Main = styled.div({
    backgroundColor: '#88BDF2',
    padding: '30px 30px',
    height: 'fit-content',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    scrollMarginTop: '10vh'
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
    // textAlign: 'center'
})

const MembersBoxs = styled.div<{ isMobile: boolean }>(({ isMobile }) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row'
}))

const Members: React.FC = () => {
  const { isMobile } = useAppContext()
  return (
    <Main id='members'>
        <Headline>חברי הסיעה</Headline>
        <MembersBoxs isMobile={isMobile}>
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