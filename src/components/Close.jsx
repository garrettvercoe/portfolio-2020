import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"
import Content from "components/FooterWhiteContent"
import dimensions from "styles/dimensions"

const Container = styled(Link)`
  svg {
    position: fixed;

    top: 3.75vw;
    left: 3.75vw;
    max-width: 50px;
    stroke: ${colors.grey600};
    stroke-miterlimit: 10;
    stroke-width: 2px;
    // transition: 0.5s transform ease;
    &:hover {
      //   transform: rotate(90deg);
      stroke: ${colors.text};
    }
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      position: inherit;
      display: block;
      max-width: 35px;
      stroke: ${colors.black};
      padding: 0 0 1em 0;
    }
  }
`
const Close = () => (
  <Container to="/">
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 51"
    >
      <line class="cls-1" x1="4.96" y1="47" x2="49.96" y2="2" />
      <line class="cls-1" x1="4.96" y1="47" x2="49.96" y2="2" />
      <line class="cls-1" x1="49.5" y1="47" x2="4.5" y2="2" />
    </svg>
  </Container>
)

export default Close
