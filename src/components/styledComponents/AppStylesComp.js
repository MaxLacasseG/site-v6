import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 7em;
    text-transform: uppercase;
    color: white;
    font-family: ${props => props.theme.fontTitle};
    color: ${props => props.theme.colorAccent};
`;
export const H2 = styled.h2`
    font-size: 5em;
    text-transform: uppercase;
    font-family: ${props => props.theme.fontTitle};
    color: ${props => props.theme.colorAccent2};
`;
export const H3 = styled.h3`
    font-size: 2em;
    text-transform: uppercase;
    font-family: ${props => props.theme.fontAccent};
    color: ${props => props.theme.colorSecondary};
`;
export const H4 = styled.h4`
    font-size: 1.75em;
    text-transform: uppercase;
    font-family: ${props => props.theme.fontAccent};
    color: ${props => props.theme.colorSecondary};
`;
export const H5 = styled.h5`
    font-size: 1.4em;
    text-transform: uppercase;
    font-family: ${props => props.theme.fontMain};
    color: ${props => props.theme.colorInfo};
`;
export const H6 = styled.h6`
    font-size: 1.3em;
    text-transform: uppercase;
    text-decoration: underline;
    font-family: ${props => props.theme.fontMain};
    color: ${props => props.theme.colorMain};
`;

export const Para = styled.p`
    font-family: ${props => props.theme.fontMain};
    color: ${props => props.theme.colorMain};
    font-size: 1.3em;
`;
