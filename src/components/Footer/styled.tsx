import styled from "styled-components";

export const StyledFooter = styled.footer`
    bottom: 0;
    position: fixed;
    display: flex;
    padding: 0 16px;
    gap: 16px;
    width: 100%;
    height: 32px;
    background-color: ${({ theme }) => theme.backgroundBase};
    border: 1px solid ${({ theme }) => theme.borderBase};
    color: ${({ theme }) => theme.textColorBase};
    align-items:center;
    justify-content:center;
    margin-top: 100px;

    p {
        font-size: 0.9em;
    }

    a {
        text-decoration: none;
        font-size: 1.2em;
        color: ${({ theme }) => theme.textColorBase};
        &:hover,
        &:focus {
            opacity: 1;
            color: red;
        }
    }
`;