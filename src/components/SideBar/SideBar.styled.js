import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background: #292929;
`;
export const Container = styled.div`
  width: 1357px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
gap: 140px;
`
export const NavItem = styled.li`
display:flex;
justify-content: center;
align-items: center;`

export const StyledLink = styled(NavLink)`
  color: #fff;
  font-family: Roboto Mono;
  font-size: 26.32px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  line-height: normal;
  padding-top: 46px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    font-size 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: #ffed4a;
    font-size: 35.716px;
  }
  &:hover {
    color: #ffed4a;
    font-size: 35.716px;
    transform: scale(1);
  }
`;

export const TextLink = styled.h3`
  color: #fff;
  font-family: Roboto Mono;
  padding-top: 46px;
  font-size: 26.32px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  line-height: normal;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    font-size 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #ffed4a;
    font-size: 35.716px;
    transform: scale(1);
  }
`;