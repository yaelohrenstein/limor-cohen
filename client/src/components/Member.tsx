import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { iMember } from '../assets/types/Member';
import photo from '../assets/images/Lior.jpeg'

const Main = styled.div({
    backgroundColor: '#F1F5F9',
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
    paddingTop: '10px'
})

interface IMemberProps {
    member: iMember
}

const DialogMember = styled(Dialog)({
    alignItems: 'center',
});

const DialogContentMember = styled(DialogContent)({
    textAlign: 'center',
    direction: 'rtl'
});


const Member: React.FC<IMemberProps> = ({ member }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const handleClick = () => {
        setIsDialogOpen(true) 
    }
    const handleClose = () => { setIsDialogOpen(false) }

    return (
        <>
            <Main onClick={handleClick}>
                <Img src={member.pic}></Img>
                <Description>{member.name}</Description>
            </Main>
             <DialogMember open={isDialogOpen} onClose={handleClose} >
             <DialogTitle style={{textAlign: 'center'}}>{member.name}</DialogTitle>
             <DialogContentMember>
                <Img src={member.pic}></Img>
                <DialogContentText style={{paddingTop: '10px'}}> 
                    {member.description}
                </DialogContentText>
             </DialogContentMember>
             <Button onClick={handleClose}>סגירה</Button>
           </DialogMember>
        </>
    );
};

export default Member;