import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import LinkArrow from "./LinkArrow"
import SpecialLinkArrow from "./SpecialLinkArrow"
import { isMobile } from "react-device-detect"
const More = styled.div`
  transition: all 0.5s ease;
  text-decoration: none;
  color: currentColor;
  &:hover {
    letter-spacing: 0.5px;
    cursor: default;
  }
`

export default class NavHelp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.onHover = this.onHover.bind(this)
    this.onOut = this.onOut.bind(this)
    // this.scrollToMyRef = this.scrollToMyRef.bind(this)
    // this.myRef = React.createRef()
  }

  onHover() {
    this.setState({ active: true })
  }
  onOut() {
    this.setState({ active: false })
  }
  // scrollToMyRef() {
  //   window.scrollTo(0, this.myRef.current.offsetTop)
  // }
  render() {
    return !isMobile ? (
      // <div
      //   style={{
      //     display: "flex",
      //     justifyContent: "space-between",
      //     paddingLeft: "3.75vw",
      //   }}
      // >
      <div>
        {this.props.text}
        <LinkArrow rotate={"45deg"} />
               
      </div>
    ) : //   {/* <More>
    //     <div
    //       onMouseOver={() => this.onHover()}
    //       onMouseOut={() => this.onOut()}
    //       // ref={this.myRef}
    //       // onClick={window.scrollTo(0, 00)}
    //     >
    //       Way More
    //       <SpecialLinkArrow active={this.state.active} />
    //     </div>
    //   </More> */}
    // // </div>
    null
  }
}
