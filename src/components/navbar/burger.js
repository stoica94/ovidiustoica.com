import React, {useState} from 'react';
import styled from 'styled-components';
import RightNav from './right-nav';
import {themeGet} from '@styled-system/theme-get';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 100;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    height: 1.7rem;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background-color: ${themeGet('colors.mainBrand')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    @media (max-width: 768px) {
      width: 1.8rem;
      height: 0.18rem;
    }

    &:nth-child(1) {
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({open}) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({open}) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
