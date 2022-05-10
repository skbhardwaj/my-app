import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
html,
body,
#root {
  width: 100%;
  height: 100%;
}

:root {
  --white: #fff;
  --black: #000;
  --gray: #666;
  --very-light-gray: #bbb;
  --purple: #705dcb;
  --teal: #4ca2bd;
  --faded-yellow: #fdf9d3;
  --faded-green: #e4ffee;
  --faded-purple: #eff2ff;
  --faded-red: #f8e8e5;
  --faded-blue: #eff7fa;
  --faded-darker-purple: #eaedf9;
  --editor-bg-light: #1e242e;
  --editor-bg-dark: #151a21;
  --shadow: #999;

  --color-body-bg: #f9f9f9;
  --color-bg: #ccc;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;

  list-style: none;
  text-decoration: none;
  outline: none;
  position: relative;

  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  /* animation: .25 linear .1s ease-in; */
  /* transition: all 300ms ease-in; */
}

@keyframes rainbow {
  0% {
    background: var(--faded-yellow); }
  25% {
    background: var(--faded-green); }
  50% {
    background: var(--faded-purple); }
  75% {
    background: var(--faded-red); }
  100% {
    background: var(--faded-yellow); } 
}

body {
  color: var(--color-text);
  /* background-color: var(--color-body-bg); */

  font-size: 16px;
  font-family:  Arial, Helvetica, sans-serif;
  font-kerning: normal;
  letter-spacing: normal;
  line-height: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;

  min-width: 320px;
  width: 100%;

  animation-name: rainbow;
  animation-duration: 40s;
  animation-iteration-count: infinite;
  animation-direction: normal;
}

hr {
  border: 1px solid #ccc;
  width: 100%;
  margin: 1rem 0;
}

h1,h2,h3,h4,h5,h6 {
  font: revert;
}

`;

export default GlobalStyles;
