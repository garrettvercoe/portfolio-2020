import css from "@emotion/css"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import fontFiles from "styles/fonts"

const globalStyles = css`
  @font-face {
    font-family: "GT-America-Extended";
    font-style: 400;
    font-weight: normal;
    src: url(${fontFiles.GTExtendedRegular}) format("truetype");
  }

  @font-face {
    font-family: "GT-America-Extended";
    font-style: 600;
    font-weight: bold;
    src: url(${fontFiles.GTExtendedBold}) format("truetype");
  }

  @font-face {
    font-family: "GT-America-Expanded";
    font-style: bold;
    font-weight: 600;
    src: url(${fontFiles.GTExpandedBold}) format("truetype");
  }

  html,
  body,
  #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  body {
    font-family: "GT-America-Extended";
    color: #131414;
    overscroll-behavior-y: none;
    font-weight: 400;
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.5;
    background-color: #f6f6f6;
    -webkit-font-smoothing: antialiased;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
    }

    * {
      box-sizing: border-box;

      &::selection {
        background: ${colors.grey500};
        color: white;
      }
    }
  }

  /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
  #___gatsby,
  div[role="group"][tabindex] {
    height: 100%;
    min-height: 100% !important;
  }
`

export default globalStyles
