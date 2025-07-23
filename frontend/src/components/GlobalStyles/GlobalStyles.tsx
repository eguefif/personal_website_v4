import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
      --color-white: hsl(250 0% 83.1%);
      --color-primary: hwb(14 40% 2.4% / 0.33);
      --color-secondary: hwb(40 84.3% 0% / 0.33);

      --color-gray-400: hsl(250 0 49.4);

      --color-gray-400-transparent: hsla(250 0% 49.4% / 0.2);
    }

  body {
    background-color: hsl(220deg, 10%, 10%);
    color: var(--color-white);

    font-family: "Lato", arial, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .lato-thin {
    font-family: "Lato", sans-serif;
    font-weight: 100;
    font-style: normal;
  }

  .lato-light {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  .lato-regular {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .lato-bold {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

.lato-black {
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
}

  /* Thanks to Josh Comeau, the author of this CSS reset */

  /* 1. Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin */
  * {
    margin: 0;
  }

  /* 3. Enable keyword animations */
  @media (prefers-reduced-motion: no-preference) {
    html {
      interpolate-size: allow-keywords;
    }
  }

  body {
    /* 4. Add accessible line-height */
    line-height: 1.5;
    /* 5. Improve text rendering */
    -webkit-font-smoothing: antialiased;
  }

  /* 6. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 7. Inherit fonts for form controls */
  input, button, textarea, select {
    font: inherit;
  }

  /* 8. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 9. Improve line wrapping */
  p {
    text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  /*
    10. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
