import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import MenuToggle from './MenuToggle';

const menuVariants = {
   open: {
      transform: 'translateX(3%)',
   },
   closed: {
      transform: 'translateX(103%)',
   },
};

const menuTransition = {
   type: 'spring',
   duration: 1,
   stiffness: 33,
   delay: 0.1,
};

const HamburgerMenu = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen(!isOpen);

   return (
      <HamburgerMenuContainer>
         <HamburgerIcon>
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
         </HamburgerIcon>
         <MenuContainer
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={menuVariants}
            translate={menuTransition}
         >
            Menu
         </MenuContainer>
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

const MenuContainer = styled(motion.div)`
   min-width: 300px;
   width: 100%;
   height: 100%;
   max-width: 44%;
   background: #fff;
   box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
   z-index: 5;
   transform: translateX(4em);
   position: fixed;
   top: 0;
   right: 0;
   user-select: none;
   padding: 1em 2.5em;
`;

export default HamburgerMenu;
