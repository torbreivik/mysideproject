import styled, { keyframes } from "styled-components";
import { columnBreakPoint } from "../utils/breakpoints";
import { useState } from "react";

const LandingWrapper = styled.main`
    margin-top: 64px;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: ${columnBreakPoint}px) {
        flex-direction: column;
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
const LooserImage = styled.img`
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
    padding: 0px 56px 56px 56px;
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
    border-bottom: 2px solid white;
    padding-bottom: 32px;
    border-top: 2px solid white;
    padding-top: 32px;
`;

const BodyText = styled.p`
    font-size: 1.45rem;
    line-height: 1.5;
    max-width: 80%;
    @media screen and (max-width: ${columnBreakPoint}px) {
        max-width: 100%;
    }
`;
const BodyText2 = styled.p`
    color: blanchedalmond;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1.45rem;
    line-height: 1.5;
    max-width: 80%;
    @media screen and (max-width: ${columnBreakPoint}px) {
        max-width: 100%;
    }
`;
const pulse = keyframes`

    0% {
        transform: scale(1) rotate(0deg);
        background-color: #d93512;
        border-color: #d93512;
    }

25% {
        transform: scale(1.1) rotate(1deg);
    }

    50% {
        transform: scale(1.0) rotate(1deg);
        background-color: #fd9c00;
        border-color: #fd9c00;
    }
    70% {
        transform: scale(1.15) rotate(1deg);
    }

    100% {
        transform: scale(1) rotate(0deg);
        background-color: #d93512;
        border-color: #d93512;
    }

`;

const hearthBeat = keyframes`
    0%, 100% {
        transform: scale(1) rotate(0deg);
        background-color: #d93512;
        border-color: #d93512;
    }

    5% {
        transform: scale(1.1) rotate(1deg);
        background-color: #fd9c00;
        border-color: #fd9c00;
        background-color: #ea431e;
        border-color: #ea431e;
    }

    15% {
        transform: scale(1.0) rotate(0deg);
        background-color: #d93512;
        border-color: #d93512;
    }

    20% {
        transform: scale(1.1) rotate(1deg);
        background-color: #ea431e;
         border-color: #ea431e;
    }

    40% {
        transform: scale(1.0) rotate(0deg);
    }

    79% {
        transform: scale(1.0) rotate(0deg);
        background-color: #d93512;
        border-color: #d93512;
    }
    
    100% {
            transform: scale(1) rotate(0deg);
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
        animation: ${pulse} 0.5s infinite ease-in-out;
        animation: ${hearthBeat} 1.65s infinite linear;
    }
    &:focus {
        outline: 2px solid #f9f5f5;
    }
`;

const ButtonCTA2 = styled.button`
    border: 2px solid currentColor;
    border-radius: 3rem;
    color: #ff5100;
    font-size: 1.25rem;
    overflow: hidden;
    padding: 1rem 2rem;
    position: relative;
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    width: max-content;

    &::after {
        /* background-color: #ff5100; */
        background-color: #ff5100;
        border-radius: 3rem;
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-100%, 0) rotate(10deg);
        transform-origin: top left;
        transition: 0.2s transform ease-out;
        will-change: transform;
        z-index: -1;
    }
    &:hover::after {
        transform: translate(0, 0);
    }
    &:hover {
        border: 2px solid transparent;
        color: black;
        transform: scale(1.025);
        will-change: transform;
    }
`;
const BigAssButton = styled.button`
    color: #e6e3df;
    width: max-content;
    background-color: saddlebrown;
    &:hover {
        color: #000000;
        transform: scale(1.69);
        background-color: #05ffde;
    }
    &:focus {
        outline: none;
        border: none;
    }
`;
const bigAssFunction = () => {
    window.location.href = "https://www.dominos.no";
};
const coolCowboyFunction = () => {};

const cowboy1 = "/cowboy3.jpg";
const cowboy2 = "/cowboy2.jpg";
const campaignReport = "/6.png";

const selectCowboy = (currentCowboy, setCurrentCowboy) => {
    if (currentCowboy === cowboy1) {
        setCurrentCowboy(cowboy2);
    } else {
        setCurrentCowboy(cowboy1);
    }
};

export const TorsPage = () => {
    const [currentCowboy, setCurrentCowboy] = useState(cowboy1);
    const [toggle, setToggle] = useState(true);

    return (
        <LandingWrapper>
            <LeftSection>
                <HeroImage src={currentCowboy} />
            </LeftSection>
            <RightSection>
                <LooserImage src={campaignReport} />
                <BigAssTitle>TOR THE RIDER OF LINE BRACKETS</BigAssTitle>
                <BodyText>
                    In the Wild West of the web, Tor lassos bugs faster than a gunslinger shoots his foe. With
                    sharpshootin' skills in HTML and JavaScript, get a site slicker than a greased pig at a county fair.
                    Glitches get stitches - ride into the sunset with Tor.
                </BodyText>
                <ButtonCTA onClick={() => (window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>
                    Shoot me a message!
                </ButtonCTA>
                <BigAssButton onClick={() => setToggle(!toggle)}>Du vil ikke tro hvor mye pizza</BigAssButton>
                <BigAssButton onClick={() => selectCowboy(setCurrentCowboy, toggle)}>
                    Du vil ikke tro hvor mye pizza
                </BigAssButton>
                <BodyText2>Dette er min første linje kode etter alt for mye pizza</BodyText2>
                {/* <ButtonCTA2 onClick={() => (window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>
                    Shoot me a message!
                </ButtonCTA2> */}
            </RightSection>
        </LandingWrapper>
    );
};
