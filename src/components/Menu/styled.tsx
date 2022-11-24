import styled from "styled-components";

export const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundBase};
  border: 1px solid ${({ theme }) => theme.borderBase};
  color: ${({ theme }) => theme.textColorBase};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
`;