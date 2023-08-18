import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ active }) =>
    active === 'true' ? '#FFED4A' : '#292929'};
  @media screen and (min-width: 1200px) {
    background-color: #292929;
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
  list-style: none;
  display: ${({ active }) => (active === 'true' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-right: auto;
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 140px;
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
  background-color: transparent;
  border: none;
  margin-top: 22px;
  margin-bottom: 15px;
  svg {
    width: 48px;
    height: 58.126px;
    fill: ${props => (props.active === 'true' ? '#000000' : '#FFED4A')};
    @media screen and (min-width: 1200px) {
      fill: #ffed4a;
      width: 92.489px;
      height: 112px;
      margin-bottom: 0;
      margin-top: 30px;
    }
  }
`;