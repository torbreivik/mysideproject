import styled from "styled-components";

const FooterStyled = styled.section`
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

export function Footer() {
    return <FooterStyled>FOOTER AND SUCH</FooterStyled>;
}
