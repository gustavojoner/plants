import styled from "styled-components";

export const StyledMenu = styled.header`

{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 16px;
  flex-wrap: wrap;
  flex-direction: column;
}

@media(min-width: 920px) {
    body {
        background-image: url('public/images/body-shape.svg'),
                          url('/public/images/bg.jpg');
        background-repeat: no-repeat, 
                          repeat-x;
        background-position: right top;
    }
}

@media(min-width: 920px) {
    {
      flex-direction: row;
      padding: 0;
      padding-left: 16px;
    }
}

nav {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
@media(min-width: 920px) {
  nav {
    justify-content: flex-end;
  }
}

li {
  list-style: none;
  font-size: 12px;
}
@media(min-width: 920px) {
  li {
    font-size: 16px;
  }
}

li a {
  display: inline-block;
  font-weight: 400;
  font-size: inherit;
  line-height: 1.1;
  text-decoration: none;
  color: ${({ theme }) => theme.textColorBase};
  padding: 8px;
}
@media(min-width: 920px) {
  li a {
    padding: 16px;
    }
}
`;