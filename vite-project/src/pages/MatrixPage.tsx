import styled from "styled-components";
import { getScreenDimensions } from "../utils/getScreenDimensions";
import { MatrixRain } from "../components/MatrixRain";

const CenterSelf = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 24px;
    min-height: 100vh;
`;

// Style adjustments for content to ensure they are above the canvas
const ContentStyle = styled.div`
    position: relative;
    z-index: 2;
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

export function MatrixPage() {
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
            <MatrixRain />
            <ContentStyle>
                <Image src={imageUrl}></Image>
                <Headline>{headlineContent}</Headline>
                <Bodytext>{bodytextContent}</Bodytext>
            </ContentStyle>
        </CenterSelf>
    );
}
