import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;
export const Header = styled.header`
  background-color: ${({ active }) =>
    active === 'true' ? '#FFED4A' : '#292929'};
  color: ${({ active }) => (active === 'true' ? '#000000' : '#fff')};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  @media screen and (min-width: 1200px) {
    background-color: #292929;
    color: #fff;
  }
`;
export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media screen and (min-width: 320px) {
    width: 310px;
  }
  @media screen and (min-width: 768px) {
    width: 610px;
  }
  @media screen and (min-width: 1200px) {
    width: 1357px;
  }
`;
export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const NavList = styled.ul`
  transform: translateY(${props => (props.active === 'true' ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-right: auto;
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 140px;
    animation: ${slideDown} 0.5s ease-in-out;
    transform: translateY(0);
  }
`;
export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  line-height: normal;
  padding-top: 40px;
  padding-bottom: 40px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    font-size 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 1200px) {
    font-size: 26.32px;
    padding-top: 46px;
    padding-bottom: 0;
  }
  &.active {
    color: ${({ active }) => (active === 'true' ? '#000000' : '#fff;')};
    font-size: 16px;
    @media screen and (min-width: 1200px) {
      color: #ffed4a;
      font-size: 35.716px;
      padding-top: 46px;
      padding-bottom: 0;
    }
  }
  &:hover {
    color: ${({ active }) => (active === 'true' ? '#000000' : '#fff;')};
    font-size: 16px;
    transform: scale(1);
    @media screen and (min-width: 1200px) {
      color: #ffed4a;
      font-size: 35.716px;
    }
  }
`;

export const TextLink = styled.h3`
  color: #fff;
  font-family: Roboto Mono;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  line-height: normal;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    font-size 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 1200px) {
    font-size: 26.32px;
    padding-top: 46px;
    padding-bottom: 0;
  }
  &:hover {
    color: ${({ active }) => (active === 'true' ? '#000000' : '#fff;')};
    font-size: 16px;
    transform: scale(1);
    @media screen and (min-width: 1200px) {
      font-size: 35.716px;
      color: #ffed4a;
    }
  }
`;

export const MenuMobile = styled.img`
  width: 41px;
  height: 41px;
`;

export const BtnMneu = styled.button`
  animation: ${slideDown} 0.5s ease-in-out;
  transform: translateY(0);
  margin-right: auto;
  background-color: transparent;
  border: none;
  margin-top: 30px;
  width: 42px;
  height: 42px;
  display: ${props => (props.active === 'true' ? 'none' : 'block')};
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const BtnLogo = styled.button`
  animation: ${slideDown} 0.5s ease-in-out;
  transform: translateY(0);
  background-color: transparent;
  border: none;
  margin-top: 22px;
  margin-bottom: 22px;
  svg {
    width: 48px;
    height: 58.126px;
    fill: ${props => (props.active === 'true' ? '#000000' : '#FFED4A')};
    @media screen and (min-width: 1200px) {
      fill: #ffed4a;
      width: 92.489px;
      height: 112px;
    }
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
    margin-top: 30px;
  }
`;

export const BtnBasket = styled.button`
  animation: ${slideDown} 0.5s ease-in-out;
  transform: translateY(0);
  width: 42px;
  height: 42px;
  margin-top: 40px;
  border-radius: 50%;
  background-color: #292929;
  border-color: transparent;
  display: ${props => (props.active === 'true' ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  fill: #ffed4a;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: #292929;
    background-color: #ffed4a;
    border: 1px solid #292929;
  }
  svg {
    width: 16px;
    height: 15px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    fill: #292929;
    background-color: #ffed4a;
    margin-right: 50px;
    margin-top: 50px;
    svg {
      width: 27px;
      height: 28px;
    }
    width: 80px;
    height: 81px;
    &:hover {
      fill: #ffed4a;
      background-color: #292929;
      border: 1px solid #ffed4a;
    }
  }
`;
