import styled from "styled-components";

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${props => props.theme.colorBgMain};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em;
`;
