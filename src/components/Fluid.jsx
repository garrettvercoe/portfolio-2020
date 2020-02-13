import React from "react"

class Fluid extends React.Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.src = "./static/fluid-init.js"
    script.id = "fluid-src" // give the script tag an ID
    script.async = true
    script.onload = () => this.fluidLoaded()
    document.body.appendChild(script)
  }

  componentWillUnmount() {
    // var canvas = document.getElementsByClassName("fluid-canvas")[0];
    // var ref = getWebGLContext(canvas);
    // var gl = ref.gl;
    // gl.getExtension("WEBGL_lose_context").loseContext();
    document.querySelector("#fluid-src").remove()
  }

  fluidLoaded() {
    console.log("Fluid Started")
  }

  render() {
    return <canvas className="fluid-canvas"></canvas>
  }
}

export default Fluid
