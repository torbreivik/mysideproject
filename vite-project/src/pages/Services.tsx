import styled from "styled-components";
import { getScreenDimensions } from "../utils/getScreenDimensions";

const CenterSelf = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export function Services() {
    const { width, height } = getScreenDimensions();
    const url = `https://loremflickr.com/${width}/${height}/dog`;
    return <CenterSelf>{<img src={url} />}</CenterSelf>;
}
