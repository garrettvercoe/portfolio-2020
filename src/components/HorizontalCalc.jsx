import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import HorizontalScroll from "react-scroll-horizontal"
import { BrowserView, MobileView } from "react-device-detect"

const HorizontalContainer = styled("div")`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

const MobileContainer = styled("div")`
  position: inherit;
  display: block;
`

// const ScrollContainerTouch = styled("div")`
//   left: 0;
//   display: block;
//   position: absolute;
//   width: 100%;
//   height: calc(100vh - 52px);
//   overflow-x: auto;
//   -webkit-overflow-scrolling: touch;
//   z-index: 10;
//   -ms-flex-item-align: end;
//   align-self: flex-end;
//   pointer-events: none;
// `
const WidthDetector = styled("div")`
  padding-top: 10.75vh;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    width: 100vw;
  }
`

export default class HorizontalCalc extends React.Component {
  render() {
    return (
      <>
        <MobileView>
          <div> </div>
          {this.props.children}
        </MobileView>
        <BrowserView>
          <HorizontalContainer>
            <HorizontalScroll
              reverseScroll={true}
              config={{ stiffness: 375, dampness: 1 }}
              animValues ={this.props.anim}
            >
              <WidthDetector
                length={this.props.years.length}
                style={{
                  width: `${100 + 26.5 * this.props.years.length}vw`,
                }}
              >
                {this.props.children}
              </WidthDetector>
            </HorizontalScroll>
          </HorizontalContainer>
        </BrowserView>
      </>
    )
  }
}
