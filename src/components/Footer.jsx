import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"
import spooch from "images/oscar-icon.png"
import Content from "components/FooterWhiteContent"

const FooterContainer = styled("div")`
  text-decoration: none;
  position: relative;

  padding-top: 1.75em;
  background-color: #131414;
  padding-left: 5%;
  padding-right: 5%;

  align-items: left;

  svg {
    max-width: 50px;
  }
`
const Footer = () => (
  <React.Fragment>
    <FooterContainer>
      Get in touch
      {/* <NoHover>Let’s roll.</NoHover>

      <Wrapper className="wrapper">
        <Title
          className="featuredTitle"
          target="_blank"
          rel="noopener"
          href="https://soundloop.app/"
          data-link=" "
        >
          <Before>Get in touch.</Before>
          <span>Get in touch.</span> <After>Get in touch.</After>
          <LinkArrow
            className="LinkArrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9.2 9.2"
            data-link-arrow=""
          >
            <path d="M8.7,2.3v6.3H2.3 M8.7,8.7L0.4,0.4"></path>
          </LinkArrow>
        </Title>
      </Wrapper>
      <FooterAuthor href="https://marguerite.io">
        © 2019 — Designed & developed by Garrett Vercoe
      </FooterAuthor> */}
    </FooterContainer>
  </React.Fragment>
)

export default Footer
