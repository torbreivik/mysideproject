import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

import styled from "styled-components";

const ButtonStyled = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 1px solid #ffffff;
    color: #fcebdf;
    margin: 0 1em;
    padding: 0.25em 1em;
    margin-bottom: 42px;
    padding: 10px 24px;
    border-radius: 8px;

    &:hover {
        background-color: #d93512;
        border: 1px solid #d93512;
        color: #ffffff;
    }
`;

const FullScreenWrap = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 99vw;
    min-height: 99vh;
    gap: 42px;
    background-color: #111111;
`;

function Playground() {
    const [count, setCount] = useState(0);

    const multiply = (count) => {
        return count * 2;
    };
    console.log(multiply(count));

    return (
        <FullScreenWrap>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button
                    onClick={() =>
                        setCount((count) => {
                            return count + 1;
                        })
                    }>
                    count is {count}
                </button>

                <ButtonStyled
                    onClick={() => {
                        console.log(multiply(count));
                    }}>
                    Good Bye
                </ButtonStyled>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </FullScreenWrap>
    );
}

export default Playground;
