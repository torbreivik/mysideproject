import styled from "styled-components";

const CenterSelf = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export function Home() {
    return (
        <CenterSelf>
            <img src="grandma.jpeg" />
        </CenterSelf>
    );
}
