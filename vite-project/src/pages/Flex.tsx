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

    return (
        <CenterSelf>
            <Headline>Flex</Headline>
        </CenterSelf>
    );
}
