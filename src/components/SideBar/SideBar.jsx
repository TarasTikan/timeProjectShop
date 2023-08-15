import { Outlet } from "react-router-dom";
import { Container, Header, NavItem, NavList, StyledLink, TextLink } from "./SideBar.styled";
export const SideBar = () => {
  return (
    <>
      <Header>
          <Container>
            <nav>
              <NavList>
                <NavItem>
                  <StyledLink to="/">Головна</StyledLink>
                </NavItem>
                <NavItem>
                  <StyledLink to="/products">Продукти</StyledLink>
                </NavItem>
                <NavItem>
                  <TextLink>Про нас</TextLink>
                </NavItem>
              </NavList>
            </nav>
          </Container>
      </Header>
      <Outlet />
    </>
  );
};
