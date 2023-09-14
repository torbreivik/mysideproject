import { useNavigate } from "react-router";
import styled from "styled-components";

const NavBarStyled = styled.nav`
  width: 100%;
  min-height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #404040;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const LogoWrapper = styled.nav`
  height: 100%;
  width: max-content;
  padding: 24px;
  :hover {
    cursor: pointer;
  }
`;

const LogoText = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  font-family: rye, Helvetica, sans-serif;
`;

const NavButtons = styled.button`
  border-radius: 4px;
  background: transparent;
  &:hover {
    cursor: pointer;
    background: transparent;
    border: 1 px solid #d93512;
    outline: 1px solid #d93512;
  }

  &:focus {
    background: transparent;
    border: 1 px solid #d93512;
    outline: 1px solid #d93512;
  }
`;

const LinkSection = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: max-content;
  flex-wrap: wrap;
`;

export function NavBar() {
  const navigate = useNavigate();

  return (
    <NavBarStyled>
      <LogoWrapper>
        <LogoText onClick={() => navigate("/")}>COWBOY CODER</LogoText>
      </LogoWrapper>
      <LinkSection>
        <NavButtons onClick={() => navigate("/home")}>Home</NavButtons>
        <NavButtons onClick={() => navigate("/torspage")}>Tors Page</NavButtons>
        <NavButtons onClick={() => navigate("/about")}>About</NavButtons>
        <NavButtons onClick={() => navigate("/services")}>Services</NavButtons>
        <NavButtons onClick={() => navigate("/playground")}>
          Portfolio
        </NavButtons>
      </LinkSection>
    </NavBarStyled>
  );
}
