import css from "@emotion/css"
import dimensions from "styles/dimensions"

const typeStyles = css`
  h1 {
    font-size: 10.33em;
    line-height: 1;
    font-weight: 400;
    margin: 0 0 0 0;
    font-family: "CanelaRegularItalic";
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 2.25em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 2em;
    }
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 400;

    font-family: "GT-America-Extended";
    line-height: 1.1;
  }

  h3 {
    line-height: 1.2;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-family: "GT-America-Extended";
    font-weight: 600;
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

  small {
    text-transform: uppercase;
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
