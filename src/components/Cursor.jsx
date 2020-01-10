import React from "react"
import styled from "@emotion/styled"

const Cursor = styled.div`
  position: fixed;
  background-color: #fd4000;
  width: 16px;
  height: 16px;

  border-radius: 100%;
  z-index: 1;
  user-select: none;
  pointer-events: none;
  z-index: 10000;
  transform: scale(1);
  // &.active {
  //     opacity: 1;
  //     transform: scale(0);
  // }
`

const CursorFollower = styled.div`
  position: fixed;
  border: 1px solid transparent;
  width: 40px;
  height: 40px;

  border-radius: 100%;
  z-index: 1;
  user-select: none;
  pointer-events: none;
  z-index: 10000;
  //overflow: hidden;
  transform: scale(1);
  // &.active {
  //     transform: scale(3);
  // }
`

export default class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = { x: 0, y: 0 }
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        <Cursor
          style={{
            left: this.state.x,
            top: this.state.y,
          }}
        />
        <CursorFollower
          style={{
            left: this.state.x - 26,
            top: this.state.y - 26,
          }}
        />
        {this.props.children}
      </div>
    )
  }
}
