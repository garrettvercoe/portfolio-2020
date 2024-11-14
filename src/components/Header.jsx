import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Filter from "./Filter"
const HeaderContainer = styled("div")`
  position: fixed;
  left: 3.25vw;
  top: 1.5vw;
  line-height: 4.5vw;
  z-index: 100;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 1em;
    position: relative;
    width: 100%;
  }
`

const HeaderContent = styled("div")``

const noStyle = {
  // borderBottom: `2px solid ${colors.text}`,
  textDecoration: "none",

  color: colors.text,
}

const HeaderLinks = styled("div")`
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  padding-left: 1em;
  grid-gap: 1em;

  width: 100%;
  max-width: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 2em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    padding: 0.25em 0 0.5em 1em;
    line-height: 1.5;
  }

  a {
    color: ${colors.grey600};
    text-decoration: none;
    border-bottom: 2px solid transparent;
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      padding: 0.5em 0;
      white-space: nowrap;
    }
    height: 100%;

    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 18px;
      height: 3px;
      background: transparent;
      bottom: -3px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      color: ${colors.text};
      transition: 100ms ease-in-out background;
    }

    &.Link--is-active {
      &:after {
        color: ${colors.text};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <h2 style={{ fontSize: "1.3em", padding: 0, margin: 0 }}>
          <Link style={noStyle} to="/">
            Garrett Vercoe
          </Link>

          <HeaderLinks>
            <Link activeClassName="Link--is-active" to="/information">
              Information
            </Link>
             <a  target ="_blank" href="https://notes.garrettvercoe.com/">
              Notes
            </a>
            <a target="_blank" href="mailto:hello@garrettvercoe.com">
              Contact
            </a>
          </HeaderLinks>
        </h2>
        {/* <Filter categories={this.props.categories}></Filter> */}
      </HeaderContainer>
    )
  }
}
