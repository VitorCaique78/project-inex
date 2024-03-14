import styled from "styled-components";

const HEADER = styled.header`
  padding: 32px 0;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.2s all ease-out;
  &.scroll {
    padding: 15px 0;
    background: #14cfd4;
  }
  @media (max-width: 762px) {
    position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: #1cc9ce;
		padding: 20px 0;
    .filter {
		  background: #096b6f;
	  }
  }
`

export {
  HEADER
}