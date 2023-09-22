import styled from "styled-components";
import { getScreenDimensions } from "../utils/getScreenDimensions";

const CenterSelf = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  padding: 24px;
  min-height: 88vh;
`;

const Headline = styled.h1`
  font-size: clamp(1rem, 6vw, 19.75rem);
  font-family: "Matrix";
  font-weight: 800;
  color: #078507;
`;
const Bodytext = styled.p`
  font-family: "Matrix";
  font-weight: 800;
  color: #078507;
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
