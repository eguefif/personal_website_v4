import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* Default Dark Theme */
    html {
      --color-white: hsl(250 0% 83.1%);
      --color-black: hsl(250 0 0);

      --color-primary: hsl(223 40% 40%);
      --color-primary-brighter: hsl(210 70% 92%);
      --color-primary-transparent: hsla(41 89.2% 27% / 0.33);
      --color-secondary: hsl(30 50 27);

      --color-transparent: hsl(144 99 99 / 0.5);

      --color-gray-50: hsl(250 0 98);
      --color-gray-100: hsl(250 0 96);
      --color-gray-200: hsl(250 0 89);
      --color-gray-300: hsl(250 0 70);
      --color-gray-400: hsl(250 0 49.4);
      --color-gray-500: hsl(250 0 39);
      --color-gray-600: hsl(250 0 32);
      --color-gray-700: hsl(250 0 25);
      --color-gray-800: hsl(250 0 15);
      --color-gray-900: hsl(250 0 9);
      --color-gray-950: hsl(250 0 4);

      --color-background: hsl(220deg, 28%, 5%);

      /* Transparent variants */
      --color-gray-50-alpha-10: hsl(250 0 98 / 0.1);
      --color-gray-50-alpha-20: hsl(250 0 98 / 0.2);
      --color-gray-50-alpha-50: hsl(250 0 98 / 0.5);
      --color-gray-50-alpha-80: hsl(250 0 98 / 0.8);

      --color-gray-400-alpha-10: hsl(250 0 49.4 / 0.1);
      --color-gray-400-alpha-20: hsl(250 0 49.4 / 0.2);
      --color-gray-400-alpha-50: hsl(250 0 49.4 / 0.5);
      --color-gray-400-alpha-80: hsl(250 0 49.4 / 0.8);

      --color-gray-600-alpha-10: hsl(250 0 32 / 0.1);
      --color-gray-600-alpha-20: hsl(250 0 32 / 0.2);
      --color-gray-600-alpha-50: hsl(250 0 32 / 0.5);
      --color-gray-600-alpha-80: hsl(250 0 32 / 0.8);

      --color-gray-900-alpha-10: hsl(250 0 9 / 0.1);
      --color-gray-900-alpha-20: hsl(250 0 9 / 0.2);
      --color-gray-900-alpha-50: hsl(250 0 9 / 0.5);
      --color-gray-900-alpha-80: hsl(250 0 9 / 0.8);

      --color-overlay: hsla(220, 15%, 10%, 0.6);
    }

    /* Light Theme Override - System Preference */
    @media (prefers-color-scheme: light) {
      html:not([data-theme]) {
        --color-white: hsl(250 0% 15%);
        --color-black: hsl(250 0 100);

        --color-primary: hsl(223 40% 60%);
        --color-primary-brighter: hsl(210 70% 20%);
        --color-primary-transparent: hsla(41 89.2% 73% / 0.33);
        --color-secondary: hsl(30 50 73);

        --color-transparent: hsl(144 99 1 / 0.5);

        --color-gray-50: hsl(250 0 2);
        --color-gray-100: hsl(250 0 4);
        --color-gray-200: hsl(250 0 11);
        --color-gray-300: hsl(250 0 30);
        --color-gray-400: hsl(250 0 50.6);
        --color-gray-500: hsl(250 0 61);
        --color-gray-600: hsl(250 0 68);
        --color-gray-700: hsl(250 0 75);
        --color-gray-800: hsl(250 0 85);
        --color-gray-900: hsl(250 0 91);
        --color-gray-950: hsl(250 0 96);

        --color-background: hsl(220deg, 8%, 98%);

        /* Light theme transparent variants */
        --color-gray-50-alpha-10: hsl(250 0 2 / 0.1);
        --color-gray-50-alpha-20: hsl(250 0 2 / 0.2);
        --color-gray-50-alpha-50: hsl(250 0 2 / 0.5);
        --color-gray-50-alpha-80: hsl(250 0 2 / 0.8);

        --color-gray-400-alpha-10: hsl(250 0 50.6 / 0.1);
        --color-gray-400-alpha-20: hsl(250 0 50.6 / 0.2);
        --color-gray-400-alpha-50: hsl(250 0 50.6 / 0.5);
        --color-gray-400-alpha-80: hsl(250 0 50.6 / 0.8);

        --color-gray-600-alpha-10: hsl(250 0 68 / 0.1);
        --color-gray-600-alpha-20: hsl(250 0 68 / 0.2);
        --color-gray-600-alpha-50: hsl(250 0 68 / 0.5);
        --color-gray-600-alpha-80: hsl(250 0 68 / 0.8);

        --color-gray-900-alpha-10: hsl(250 0 91 / 0.1);
        --color-gray-900-alpha-20: hsl(250 0 91 / 0.2);
        --color-gray-900-alpha-50: hsl(250 0 91 / 0.5);
        --color-gray-900-alpha-80: hsl(250 0 91 / 0.8);

        --color-overlay: hsla(220, 15%, 90%, 0.6);
      }
    }

  body, #root {
    background: radial-gradient(circle at 0% 0%, hsl(210 30% 8%) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, hsl(210 30% 8%) 0%, transparent 75%),
                radial-gradient(circle at 100% 100%, hsl(210 30% 8%) 0%, transparent 100%),
                var(--color-background);
    color: var(--color-white);
    min-height: 100vh;
  }

  body {
    font-family: 'Inter', arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.1rem;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Manual Theme Overrides */
  html[data-theme="light"] {
    --color-white: hsl(250 0% 15%);
    --color-black: hsl(250 0 100);

    --color-primary: hsl(223 40% 60%);
    --color-primary-brighter: hsl(210 70% 20%);
    --color-primary-transparent: hsla(41 89.2% 73% / 0.33);
    --color-secondary: hsl(30 50 73);

    --color-transparent: hsl(144 99 1 / 0.5);

    --color-gray-50: hsl(250 0 2);
    --color-gray-100: hsl(250 0 4);
    --color-gray-200: hsl(250 0 11);
    --color-gray-300: hsl(250 0 30);
    --color-gray-400: hsl(250 0 50.6);
    --color-gray-500: hsl(250 0 61);
    --color-gray-600: hsl(250 0 68);
    --color-gray-700: hsl(250 0 75);
    --color-gray-800: hsl(250 0 85);
    --color-gray-900: hsl(250 0 91);
    --color-gray-950: hsl(250 0 96);

    --color-background: hsl(220deg, 8%, 98%);

    --color-gray-50-alpha-10: hsl(250 0 2 / 0.1);
    --color-gray-50-alpha-20: hsl(250 0 2 / 0.2);
    --color-gray-50-alpha-50: hsl(250 0 2 / 0.5);
    --color-gray-50-alpha-80: hsl(250 0 2 / 0.8);

    --color-gray-400-alpha-10: hsl(250 0 50.6 / 0.1);
    --color-gray-400-alpha-20: hsl(250 0 50.6 / 0.2);
    --color-gray-400-alpha-50: hsl(250 0 50.6 / 0.5);
    --color-gray-400-alpha-80: hsl(250 0 50.6 / 0.8);

    --color-gray-600-alpha-10: hsl(250 0 68 / 0.1);
    --color-gray-600-alpha-20: hsl(250 0 68 / 0.2);
    --color-gray-600-alpha-50: hsl(250 0 68 / 0.5);
    --color-gray-600-alpha-80: hsl(250 0 68 / 0.8);

    --color-gray-900-alpha-10: hsl(250 0 91 / 0.1);
    --color-gray-900-alpha-20: hsl(250 0 91 / 0.2);
    --color-gray-900-alpha-50: hsl(250 0 91 / 0.5);
    --color-gray-900-alpha-80: hsl(250 0 91 / 0.8);

    --color-overlay: hsla(220, 15%, 90%, 0.6);
  }

  /* Light Theme Body Override - System Preference */
  @media (prefers-color-scheme: light) {
    html:not([data-theme]) {
      body, #root {
        background: radial-gradient(circle at 0% 0%, hsl(220 15% 96%) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, hsl(210 20% 94%) 0%, transparent 75%),
                    radial-gradient(circle at 100% 100%, hsl(200 25% 96%) 0%, transparent 100%),
                    var(--color-background);
      }
    }
  }

  /* Manual Light Theme Body */
  html[data-theme="light"] {
    body, #root {
      background: radial-gradient(circle at 0% 0%, hsl(220 15% 96%) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, hsl(210 20% 94%) 0%, transparent 75%),
                  radial-gradient(circle at 100% 100%, hsl(200 25% 96%) 0%, transparent 100%),
                  var(--color-background);
    }
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
