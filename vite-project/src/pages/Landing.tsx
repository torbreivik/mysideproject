import { useNavigate } from "react-router";
import "./landing.css";
import styled, { keyframes } from "styled-components";

const columnBreakPoint = 1400;

const PageWrapper = styled.main`
    width: calc(99vw);
    min-height: 99vh;
    padding: 0;
    margin: auto;
    background-color: #111111;
`;

const NavBar = styled.nav`
    width: 100%;
    min-height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-bottom: 1px solid #404040;
    margin-bottom: 82px;
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

const Body = styled.section`
    display: flex;
    flex-direction: row;
    min-height: 88vh;
    padding: 24px;
    @media screen and (max-width: ${columnBreakPoint}px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const LeftSection = styled.section`
    display: flex;
    justify-content: center;
    flex-basis: 1;
    min-width: 40%;
    @media screen and (max-width: ${columnBreakPoint}px) {
        padding: 24px;
        margin-bottom: 64px;
        /* justify-content: flex-start; */
    }
`;

const HeroImage = styled.img`
    height: 30vw;
    width: 30vw;
    border-radius: 50%;
    display: block;
    object-fit: cover;
    @media screen and (max-width: ${columnBreakPoint}px) {
        width: 70vw;
        max-width: 600px;
        height: 70vw;
        max-height: 600px;
    }
`;

const RightSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-basis: 1;
    flex-grow: 1;
    padding: 54px;
    gap: 42px;
    @media screen and (max-width: ${columnBreakPoint}px) {
        align-items: center;
        width: 80%;
        margin: auto;
        padding: 24px;
        margin-bottom: 64px;
        text-align: center;
    }
`;

const BigAssTitle = styled.h1`
    font-size: clamp(1rem, 6vw, 19.75rem);
    font-family: rye, Helvetica, sans-serif;
    font-weight: 800;
`;

const BodyText = styled.p`
    font-size: 1.45rem;
    line-height: 1.5;
    max-width: 80%;
    @media screen and (max-width: ${columnBreakPoint}px) {
        max-width: 100%;
    }
`;

const Footer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    min-height: 320px;
    border-top: 1px solid #404040;
    font-weight: 600;
    font-size: 1.5rem;
`;

const pulse = keyframes`

    0% {
        transform: scale(1) rotate(0deg);
        background-color: #d93512;
        border-color: #d93512;
    }
    50% {
        transform: scale(1.15) rotate(2deg);
        background-color: #810069;
        border-color: #810069;
    }

    100% {
        transform: scale(1) rotate(0deg);
        background-color: #d93512;
        border-color: #d93512;
    }


`;

const ButtonCTA = styled.button`
    background-color: #ffffff;
    background-color: #d93512;
    border-radius: 25px;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.75em 1em;
    width: max-content;
    &:hover {
        cursor: pointer;
        animation: ${pulse} 0.55s infinite linear;
    }
    &:focus {
        outline: 2px solid #f9f5f5;
    }
`;

const NavButtons = styled.button`
    border-radius: 4px;
    background: transparent;
    &:hover {
        cursor: pointer;
        background: transparent;
        border: 1 px solid #d93512;
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

export function Landing() {
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <NavBar>
                <LogoWrapper>
                    <LogoText onClick={() => navigate("/")}>COWBOY CODER</LogoText>
                </LogoWrapper>
                <LinkSection>
                    <NavButtons onClick={() => navigate("/playground")}>Home</NavButtons>
                    <NavButtons onClick={() => navigate("/playground")}>About</NavButtons>
                    <NavButtons onClick={() => navigate("/playground")}>Services</NavButtons>
                    <NavButtons onClick={() => navigate("/playground")}>Portfolio</NavButtons>
                </LinkSection>
            </NavBar>
            <Body>
                <LeftSection>
                    <HeroImage src="/public/cowboy2.png" />
                </LeftSection>
                <RightSection>
                    <BigAssTitle>TOR THE COWBOY CODER</BigAssTitle>
                    <BodyText>
                        In the Wild West of the web, Tor lassos bugs faster than a gunslinger shoots his foe. With
                        sharpshootin' skills in HTML to JavaScript, get a site slicker than a greased pig at a county
                        fair. Glitches get stitches - ride into the sunset with Tor.
                    </BodyText>
                    <ButtonCTA onClick={() => (window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>
                        Shoot me a message!
                    </ButtonCTA>
                </RightSection>
            </Body>
            <Footer>FOOTER AND SUCH</Footer>
        </PageWrapper>
    );
}
