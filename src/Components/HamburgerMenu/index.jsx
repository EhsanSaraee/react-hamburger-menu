import styled from 'styled-components';

const HamburgerMenu = () => {
   return (
      <HamburgerMenuContainer>
         <HamburgerIcon>Icon</HamburgerIcon>
         <MenuContainer>Menu</MenuContainer>
      </HamburgerMenuContainer>
   );
};

const HamburgerMenuContainer = styled.div`
   display: flex;
`;

const HamburgerIcon = styled.div`
   color: ${({ reverseColor }) => (reverseColor ? '#000' : '#fff')};
   cursor: pointer;
   z-index: 10;
   transition: all 250ms ease-in-out;
`;

const MenuContainer = styled.div`
   min-width: 300px;
   width: 100%;
   height: 100%;
   max-width: 44%;
   background: #fff;
   box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
   z-index: 5;
   position: fixed;
   top: 0;
   right: 0;
   user-select: none;
   padding: 1rem 2.5rem;
`;

export default HamburgerMenu;
