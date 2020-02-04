import css from "@emotion/css"
import dimensions from "styles/dimensions"

const typeStyles = css`
  h1 {
    font-size: 6.67em;
    line-height: 1.45;
    font-weight: 600;
    font-family: "GT-America-Expanded";
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 2.25em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 2em;
    }
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2.375em;
    font-weight: 400;
    line-height: 1.1;
  }

  h3 {
    line-height: 1.2;
    font-size: 1.5em;
    font-weight: 400;
  }

  h4 {
  }

  h5 {
    margin-bottom: 1.45rem;
    font-weight: 400;
    line-height: 20px;
    font-size: 0.95em;
  }

  h6 {
    font-size: 0.9em;
    font-weight: 400;
    margin: 0;
  }

  p {
    line-height: 1.9;
    font-weight: 300;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }
`

export default typeStyles
