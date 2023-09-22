import styled from "styled-components";
import { getScreenDimensions } from "../utils/getScreenDimensions";
import { MatrixRain } from "../components/MatrixRain.jsx";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 91vw;
  height: 85vh;
  position: relative;
  z-index: 2;
`;

const Headline = styled.h1`
  font-size: 5vw;
  margin-bottom: 16px;
  font-family: "Matrix";
  @media screen and (max-width: 800px) {
    font-size: 42px;
    color: #09f009;
  }
`;

const Bodytext = styled.p`
  font-size: 18px;
  font-family: "Matrix";
  @media screen and (max-width: 800px) {
    color: #09f009;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00000097;
  padding: 24px;
  text-align: center;
`;

const ImageCropped = styled.div`
  margin-bottom: 24px;
  height: 30vw;
  width: 30vw;
  border-radius: 50%;
  display: block;
  background-image: url(${(props) =>
    props.src}); /* Replace with your image path */
  background-size: 150%; /* Zoom into the image by 20% */
  background-position: center calc(50% - 20px);
  background-repeat: no-repeat;
  background-clip: border-box;
`;

const Image = styled.img`
  margin-bottom: 24px;
  width: 70vw;
  display: block;
`;

let headlineContent = "Wake up, Tor...";
let bodytextContent1 = "The Matrix has you ...";
let bodytextContent2 = "Follow the white rabbit";
let bodytextContent3 = "...";
let bodytextContent4 = "Knock, knock, Tor";
let imageUrl = "/public/morp3.jpg";
let circleCrop = true;

export function MatrixPage() {
  const { width, height } = getScreenDimensions();

  if (width < 800) {
    headlineContent = "Take the red pill";
    bodytextContent1 = "and I show you how deep the rabbit hole goes";
    bodytextContent2 = "...";
    bodytextContent3 = "Take the blue pill";
    bodytextContent4 =
      "And stay a product owner for the rest of your life, believing whatever you want to believe";
    imageUrl = "/public/pill.png";
    circleCrop = false;
  }

  return (
    <CenterSelf>
      <MatrixRain />
      <ContentStyle>
        {circleCrop ? (
          <ImageCropped src={imageUrl} />
        ) : (
          <Image src={imageUrl} />
        )}

        <TextContainer>
          <Headline>{headlineContent}</Headline>
          <Bodytext>{bodytextContent1}</Bodytext>
          <Bodytext>{bodytextContent2}</Bodytext>
          <Bodytext>{bodytextContent3}</Bodytext>
          <Bodytext>{bodytextContent4}</Bodytext>
        </TextContainer>
      </ContentStyle>
    </CenterSelf>
  );
}
