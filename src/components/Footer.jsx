import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"
import spooch from "images/oscar-icon.png"
import Content from "./FeaturedProductContent"
const After = styled.div`
  &:hover {
    height: 100%;
  }
  color: #000;
  height: 0;
  left: 0;
  font-size: 6.67rem;
  line-height: 1.45;
  font-weight: 600;
  font-family: "GT-America-Expanded";
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: height 0.4s ease;
  .mix-blend-mode-unsupported & {
    color: #fff;
  }
`

const Before = styled.div`
  color: #fff;
  font-size: 6.67rem;
  line-height: 1.45;
  font-weight: 600;
  font-family: "GT-America-Expanded";
  left: 0;
  position: absolute;
  top: 0;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.075rem;
  .mix-blend-mode-unsupported & {
    color: #fff;
  }
`

const FooterContainer = styled("div")`
  text-decoration: none;
  position: relative;
  &:hover {
    .LinkArrow {
      transform: translateY(-2.25em) scale(6);
    }
  }
  padding-top: 1.75em;
  background-color: #131414;
  padding-bottom: 4em;
  padding-left: 5%;
  padding-right: 5%;
  position: relative;

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

const NoHover = styled.h1`

  text-decoration: none;
  padding-right: 1.5rem;
  padding-bottom: 0rem;
  margin-bottom: 0rem;
  line-height: 1.1;
    color: transparent;
    font-size: 3.25em;
      color: #fff;
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
  stroke: #fff;
  transition: transform 0.4s ease;
  width: 1rem;

  //write to not show on smaller devices
`

const Title = styled.a`
  &:hover {
    .LinkArrow {
      transform: translateY(-0.8rem);
    }
  }
  text-decoration: none;
  padding-right: 0.5rem;
  padding-bottom: 0rem;
  margin-bottom: 0rem;
  line-height: 1.1;


    color: transparent;
    font-size: 5.5em;

    //write to not show on smaller devices
  }
`
const FeaturedTitle = styled.a`
  
  text-decoration: none;
  padding-right: 1.5rem;
  padding-bottom: 0rem;
  margin-bottom: 0rem;
  line-height: 1.1;
  color: #fff;
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
    <FooterContainer>
      <Content title={"Get in touch."}></Content>
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
