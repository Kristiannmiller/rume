import styled from "styled-components";

export const DropIcon = styled.div`
  position: relative;
  top: -1.2vw;
  height: .9vw;
  min-width: .4vw;
  background-color: hsl(237, 33%, 12%);
  border-radius: 100%;
  box-shadow: 1px 1px 3px #F3F5F6;
`

export const FineBubble = styled.div`
  height: ${props => props.size};
  width: ${props => props.size};
  background-color: ${props => props.color};
  border-radius: 100%;
  box-shadow: 0px 0px 35px white inset;
  position: absolute;
  z-index: ${props => props.zIndex};
  align-self: center;
`
