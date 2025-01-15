import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
// import logo from '../logo.png';
// import { useAppContext } from '../AppContext';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { useAppContext } from '../AppContext';

const Nav = styled.nav({
    color: 'white',
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems:'center',
    padding: '0 0 0 10px',
    backgroundColor: '#384959',
    height: '10vh',
    position: 'sticky',
    top: '0',
    width: '100%',
    // fontFamily: 'VarelaRound',
    // zIndex: 2,
    boxShadow: '0px 5px 5px #282c34',
    justifyContent: 'space-between'
})


const Logo = styled.div({
    backgroundImage: 'linear-gradient(to right, #384959, #6A89A7)',
    width: '120px',
    height: '100%',
    fontSize: '10px',
    padding: '2px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: '7px'
})

const Routes = styled.ul<{ isOpen: boolean, isMobile: boolean }>(({ isOpen, isMobile }) => ({
  listStyle: 'none',
  display: !isOpen && isMobile ? 'none' : 'flex',
  flexDirection: isMobile ? 'column' : 'row',
  gap: '1rem',
  padding: isMobile ? '10px' : '0px',
  position: isMobile ? 'absolute' : 'relative',
  top: isMobile ? '10vh' : '0', // Position below the nav
  right: 0,
  backgroundColor: '#384959',
  width: '100%',
  height: isMobile ? 'auto' : '100%',
  paddingRight: '10px',
  alignContent: 'center'
}));

const NavLink = styled.a<{ isActive: boolean }>(({ isActive }) => ({
  color: 'white',
  textDecoration: 'none',
  padding: '10px',
  fontSize: '18px',
//   backgroundColor: isActive ? '#EAF6EF' : '#48694E',
//  '&:hover': {
//     color: '#3A6041'
//   },
  height: '100%',
  display: 'grid',
  alignItems: 'center'
}))


const HamburgerButton = styled('div')({
  color: '#EAF6EF',
  fontSize: '1.5rem',
  cursor: 'pointer',
  marginRight: '20px',
});

const Icons = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
})

const Navbar: React.FC = () => {
  const { isMobile } = useAppContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <Nav>
      <Logo>
        <div style={{fontSize: '15px', fontWeight: 'bold', textShadow: '1px 1px 1px black'}}>רז שגיא</div>
        ראש עיריית ראש העין
        <br />
        י״ור סיעת התחדשות
      </Logo>

      {isMobile ? (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          תפריט
        </HamburgerButton>
        </div>
      ) : (
      <Routes isOpen={true} isMobile={isMobile}>
      <NavLink
        href='#about'
        isActive={location.pathname === 'about'}
      >
        אודותי
      </NavLink>
      <NavLink
        href='#members'
        isActive={location.pathname === 'members'}
      >
        חברי הסיעה
      </NavLink>
      <NavLink
        href='#posts'
        isActive={location.pathname === 'posts'}
      >
        פוסטים
      </NavLink>
      </Routes>)}
      {isMobile && (
        <Routes isOpen={isMenuOpen} isMobile={isMobile}>
          <NavLink
        href='about'
        isActive={location.pathname === 'about'}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        
        אודותי 
      </NavLink>
      <NavLink
        href='members'
        isActive={location.pathname === 'about'}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        
        חברי הסיעה
      </NavLink>
      {/* on click set isopen falses */}
        </Routes>
      )}
       <Icons>
            <FaSquareInstagram size={40}/>
            <FaFacebookSquare size={40} onClick={() => window.open('https://www.facebook.com/razsagi.il')}/>
        </Icons>
    </Nav>
  );
};

export default Navbar;