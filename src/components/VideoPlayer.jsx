import React from "react"
import ReactPlayer from "react-player"
import styled from "@emotion/styled"
import ConsoleLog from "./ConsoleLog"
const NoTouch = styled("div")`
  pointer-events: none;
`
class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidUpdate(prevProps) {
    if (this.props.active !== prevProps.active && this.props.active === false) {
      this.player.seekTo(0)
    }
  }
  ref = player => {
    this.player = player
  }
  render() {
    return (
      <>
        <ReactPlayer
          url={this.props.src}
          playing={this.props.active}
          loop={true}
          height="56.25%"
          ref={this.ref}
          muted={true}
        />
      </>
    )
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }
}

export default VideoPlayer
