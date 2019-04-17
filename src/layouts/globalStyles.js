import { createGlobalStyle } from 'styled-components'
import * as fonts from "../fonts"

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "MonoramaRegular";
  font-display: swap;
  font-style: normal;
  font-weight: normal;
  src: local("MonoramaRegular"), local("MonoramaRegular"), url(${fonts.MonoramaRegular}) format("woff");
}
@font-face {
  font-family: "MonoramaBold";
  font-display: swap;
  font-style: normal;
  font-weight: normal;
  src: local("MonoramaBold"), local("MonoramaBold"), url(${fonts.MonoramaBold}) format("woff");
}
@font-face {
  font-family: "MonoramaMedium";
  font-display: swap;
  font-style: normal;
  font-weight: normal;
  src: local("MonoramaMedium"), local("MonoramaMedium"), url(${fonts.MonoramaMedium}) format("woff");
}
@font-face {
  font-family: "MonoramaSemiBold";
  font-display: swap;
  font-style: normal;
  font-weight: normal;
  src: local("MonoramaSemiBold"), local("MonoramaSemiBold"), url(${fonts.MonoramaSemiBold}) format("woff");
}
  `
export default GlobalStyle