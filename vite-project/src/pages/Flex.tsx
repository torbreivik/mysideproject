import styled from "styled-components";
import { getScreenDimensions } from "../utils/getScreenDimensions";

const CenterSelf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.h1``;

export function Flex() {
  const { width, height } = getScreenDimensions();
  let headlineContent = "Agent Tor is watching you";
  if (width < 800) {
    headlineContent = "Take the red pill";
  }
  return (
    <CenterSelf>
      <Headline>{headlineContent}</Headline>
    </CenterSelf>
  );
}
