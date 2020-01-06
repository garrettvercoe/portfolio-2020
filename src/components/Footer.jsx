import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"
import spooch from "images/oscar-icon.png"

const FooterContainer = styled("a")`
  text-decoration: none;
  &:hover {
    .LinkArrow {
      transform: translateY(-2.25em) scale(6);
    }
  }
  padding-top: 1.75em;
  padding-bottom: 4em;
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 1.75em;

  svg {
    max-width: 50px;
  }
`
const Wrapper = styled("div")`
  position: relative;
  padding-bottom: 1em;
`
const FooterAuthor = styled("a")`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;

  &:hover {
    color: ${colors.blue900};

    .FooterSpooch {
      animation-name: rotate;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const overrides = {}

const NoHover = styled.div`

  text-decoration: none;
  padding-right: 1.5rem;
  padding-bottom: 0rem;
  margin-bottom: 0rem;
  line-height: 1.1;
    color: transparent;
    font-size: 3.25em;
      color: #000;
      content: attr(data-text);
      left: 0;
      
      top: 0;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 0.075rem;

      .mix-blend-mode-unsupported & {
        color: #fff;
      }
    

   
    //write to not show on smaller devices
  }
`
const LinkArrow = styled.svg`
  &:hover {
    transform: translateY(-0.8rem);
  }

  fill: none;
  height: 1rem;
  margin-left: 0.75rem;
  margin-right: -1.5rem;
  stroke: #000;
  transition: transform 0.4s ease;
  width: 1rem;

  //write to not show on smaller devices
`

const FeaturedTitle = styled.a`
 
  text-decoration: none;
  padding-right: 1.5rem;
  padding-bottom: 0rem;
  margin-bottom: 0rem;
  line-height: 1.1;
  color: #000;
  font-size: 3.25em;
    &:hover {
      &:after {
        height: 100%;
      }
    }
    //write to not show on smaller devices
  }
`
const Footer = () => (
  <React.Fragment>
    <FooterContainer target="_blank" href="mailto:garrettvercoe@gmail.com">
      <NoHover>
        Let’s make something <br></br>great together.
      </NoHover>

      <Wrapper className="wrapper">
        <FeaturedTitle
          className="FeaturedTitle"
          target="_blank"
          rel="noopener"
          href="https://soundloop.app/"
          data-link=" "
        >
          garrettvercoe@gmail.com
          <LinkArrow
            className="LinkArrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9.2 9.2"
            data-link-arrow=""
          >
            <path d="M8.7,2.3v6.3H2.3 M8.7,8.7L0.4,0.4"></path>
          </LinkArrow>
        </FeaturedTitle>
      </Wrapper>
      <FooterAuthor href="https://marguerite.io">
        © 2019 — Designed & developed by Garrett Vercoe
      </FooterAuthor>
    </FooterContainer>
  </React.Fragment>
)

export default Footer
