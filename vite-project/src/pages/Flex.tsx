import styled from "styled-components";
import { getScreenDimensions } from "../utils/getScreenDimensions";

const CenterSelf = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    outline: solid 1px red;
    width: 100%;
    padding: 24px;
    min-height: 88vh;
`;

const Headline = styled.h1`
    font-size: 5vw;
    @media screen and (max-width: 800px) {
        font-size: 42px;
        color: #09f009;
    }
`;
const Bodytext = styled.p`
    @media screen and (max-width: 800px) {
        color: #09f009;
    }
`;
const Image = styled.img`
    max-width: 600px;
    max-height: 400px;
    margin-bottom: 24px;
`;

export function Flex() {
    const { width, height } = getScreenDimensions();
    let headlineContent = "Agent Tor is watching you";
    let bodytextContent = "Do you think this is reality?";
    let imageUrl = "/public/Morpheus.png";
    if (width < 800) {
        headlineContent = "Take the red pill";
        bodytextContent = "And take a trip down the rabbit hole";
        imageUrl = "/public/pill.png";
    }

    return (
        <CenterSelf>
            <Image src={imageUrl}></Image>
            <Headline>{headlineContent}</Headline>
            <Bodytext>{bodytextContent}</Bodytext>
        </CenterSelf>
    );
}
