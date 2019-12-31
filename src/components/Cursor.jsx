import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"

const circle = styled("div")`
position: fixed;
background-color: #fff;
width: 10px;
height: 10px;
left:-10px;
top:-10px;
border-radius: 100%;
z-index: 1;

z-index: 10000;
transform: scale(1);

  }
`

const circleFollow = styled("div")`
  position: fixed;
  border: 1px solid #fff;
  width: 30px;
  height: 30px;
  left: -21px;
  top: -21px;
  border-radius: 100%;
  z-index: 1;
  user-select: none;
  pointer-events: none;
  z-index: 10000;
  transform: scale(1);
`

var $circle = $(".circle"),
  $follow = $(".circle-follow")

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
    x: e.clientX,
    y: e.clientY,
  })
  TweenLite.to($follow, 0.7, {
    x: e.clientX,
    y: e.clientY,
  })
}

function hoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 0,
  })
  TweenLite.to($follow, 0.3, {
    scale: 3,
  })
}

function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 1,
  })
  TweenLite.to($follow, 0.3, {
    scale: 1,
  })
}

$(window).on("mousemove", moveCircle)

$("a").hover(hoverFunc, unhoverFunc)
