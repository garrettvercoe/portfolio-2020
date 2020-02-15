import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Filter from "./Filter"
const HeaderContainer = styled("div")`
  padding-top: 1em;
  padding-left: 3.75vw;
`

const HeaderContent = styled("div")`
  display: flex;
`

const noStyle = {
  borderBottom: `2px solid ${colors.text}`,
  textDecoration: "none",

  color: colors.text,
}

const HeaderLinks = styled("div")`
  display: inline-flex;
  grid-template-columns: repeat(2, auto);
  grid-gap: 2em;

  width: 100%;
  max-width: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    color: ${colors.text};
    text-decoration: none;
    border-bottom: 2px solid transparent;

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
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderContent>
          <h2>
            Personal repo of{" "}
            <Link style={noStyle} to="/">
              Garrett Vercoe
            </Link>
            {" — "}
            <HeaderLinks>
              <Link activeClassName="Link--is-active" to="/work">
                Information,
              </Link>
              <Link activeClassName="Link--is-active" to="/blog">
                Contact
              </Link>
            </HeaderLinks>
          </h2>
          <Filter categories={this.props.categories}></Filter>
        </HeaderContent>
      </HeaderContainer>
    )
  }
}
