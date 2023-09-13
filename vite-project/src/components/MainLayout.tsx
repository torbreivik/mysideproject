import { Outlet } from "react-router";
import styled from "styled-components";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { columnBreakPoint } from "../utils/breakpoints";

const PageWrapper = styled.main`
    width: calc(99vw);
    min-height: 99vh;
    padding: 0;
    margin: auto;
    background-color: #111111;
`;

const Body = styled.section`
    display: flex;
    flex-direction: row;
    min-height: 88vh;
    padding: 24px;
    justify-content: center;
    @media screen and (max-width: ${columnBreakPoint}px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export function MainLayout() {
    return (
        <PageWrapper>
            <NavBar />
            <Body>{<Outlet />}</Body>
            <Footer />
        </PageWrapper>
    );
}
