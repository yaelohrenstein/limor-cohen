import React from 'react';
import { styled } from 'styled-components';
import { iPost } from '../assets/types/Post';

const Main = styled.div({
    backgroundColor: '#FFFFFF',
    border: 'Window',
    padding: '15px',
    height: 'fit-content',
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10%',
    margin: '10px'
})

const Img = styled.img({
    width: '10em',
    height: '10em',
    borderRadius: '10%'
})

const Description = styled.div({
    paddingTop: '10px',
    direction: 'rtl'
})

interface IPostProps {
    post: iPost
}

const Post: React.FC<IPostProps> = ({ post }) => (
    <>
        <Main>
            {/* <Img src={post.src}></Img> */}
            <Description>{post.description}</Description>
        </Main>
    </>
);

export default Post;