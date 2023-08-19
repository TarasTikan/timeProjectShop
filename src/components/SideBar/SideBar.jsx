import { Outlet, useNavigate } from "react-router-dom";
import { BtnBasket, BtnLogo, BtnMneu, Container, Header,NavHeader, NavItem, NavList, StyledLink, TextLink } from "./SideBar.styled";
import menuMobile from '../../img/menuMobile.png';
import {useState } from "react";
import { Logo } from "icons/logo";
import { ShopBascetIcon } from "icons/shopBascetIcon";
export const SideBar = () => {
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  const toggleMenu = () => {
setMenu(!menu);
  }
  return (
    <>
      <Header active={menu.toString()}>
        <Container>
          <NavHeader active={menu.toString()}>
            <BtnMneu
              type="button"
              onClick={toggleMenu}
              active={menu.toString()}
            >
              <img src={menuMobile} alt="menu" />
            </BtnMneu>
            <NavList active={menu.toString()}>
              <NavItem>
                <StyledLink to="/" active={menu.toString()}>
                  Головна
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/products" active={menu.toString()}>
                  Продукти
                </StyledLink>
              </NavItem>
              <NavItem>
                <TextLink active={menu.toString()}>Про нас</TextLink>
              </NavItem>
            </NavList>
            <BtnBasket
              type="button"
              active={menu.toString()}
              onClick={() => navigate('/basket')}
            >
              <ShopBascetIcon />
            </BtnBasket>
            <BtnLogo type="button" active={menu.toString()}>
              <Logo />
            </BtnLogo>
          </NavHeader>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};
