import styled from 'styled-components';


export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-radius: 12px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 550px;
  transition: 1s;
  &:hover {

    transform:scale(0.9, 0.9);
    }
`
export const TopSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: 0px -150px;
  background-size: cover;

`;

