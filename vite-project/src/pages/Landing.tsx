import { useNavigate } from "react-router";
import "../App.css";
import "./landing.css";
import styled, { keyframes } from "styled-components";

const PageWrapper = styled.main`
    min-width: 98.5vw;
    min-height: 99vh;
    padding: 0;
    margin: auto;
    margin-left: 5px;
`;

const NavBar = styled.nav`
    width: 100%;
    min-height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-bottom: 1px solid #404040;
    margin-bottom: 62px;
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
`;

const LeftSection = styled.section`
    display: flex;
    justify-content: center;
    flex-basis: 1;
    min-width: 40%;
`;

const RightSection = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex-basis: 1;
    flex-grow: 1;
    padding: 54px;
    gap: 42px;
`;

const HeroImage = styled.img`
    height: 30vw;
    width: 30vw;
    border-radius: 50%;
    display: block;
    object-fit: cover;
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

const BigAssTitle = styled.h1`
    font-size: clamp(1rem, 6vw, 19.75rem);
    font-family: rye, Helvetica, sans-serif;
    font-weight: 800;
`;

const BodyText = styled.p`
    font-size: 1.45rem;
    line-height: 1.5;
    max-width: 80%;
`;
const LogoWrapper = styled.nav`
    height: 100%;
    width: max-content;
    padding: 24px;
    :hover {
        cursor: pointer;
    }
`;

const pulse = keyframes`

    0% {
        /* transform: scale(3.5) rotate(0deg); */
        transform: scale(1) rotate(0deg);
        background-color: #d93512;
        border-color: #d93512;
        /* transform: rotate(0); */
    }
    50% {
        /* transform: scale(1); */
        /* transform: scale(1.5) rotate(180deg); */
        transform: scale(1.15) rotate(2deg);
        background-color: #810069;
        border-color: #810069;
        /* transform: scale(3.5) rotate(0deg); */
        /* transform: rotate(0); */
    }

    100% {
        /* transform: scale(1.01); */
        /* transform: scale(3.5) rotate(360deg); */
        transform: scale(1) rotate(0deg);
        background-color: #d93512;
        border-color: #d93512;
        /* transform: rotate(360deg); */
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
        /* animation: ${pulse} 1.5s infinite linear; */
        animation: ${pulse} 0.55s infinite linear;
    }
`;

const NavButtons = styled.button`
    border-radius: 4px;
    &:hover {
        cursor: pointer;
        border: 1 px solid #d93512;
        border: 1 px solid #d93512;
        outline: 1px solid #d93512;
    }

    &:focus {
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
                        In the Wild West of the web, Tor lassos bugs faster than a gunslinger draws his six-shooter.
                        With sharpshootin' skills in HTML to JavaScript, get a site slicker than a greased pig at a
                        county fair. Don't gamble on glitches; ride into the sunset with Tor.
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
