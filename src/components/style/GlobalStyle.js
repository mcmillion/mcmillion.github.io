import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:after, *:before {
    box-sizing: inherit;
  }

  body {
    background: ${props => props.theme.base0};
    color: ${props => props.theme.text2};
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 2rem;
    margin: 0;
  }
`

const solarized = {
  base03: '#002b36',
  base02: '#073642',
  base01: '#586e75',
  base00: '#657b83',
  base0: '#839496',
  base1: '#93a1a1',
  base2: '#eee8d5',
  base3: '#fdf6e3',
  yellow: '#b58900',
  orange: '#cb4b16',
  red: '#dc322f',
  magenta: '#d33682',
  violet: '#6c71c4',
  blue: '#268bd2',
  cyan: '#2aa198',
  green: '#859900',
}

export const Theme = {
  base0: solarized.base03,
  base1: solarized.base02,
  text0: solarized.base01,
  text1: solarized.base00,
  text2: solarized.base0,
  text3: solarized.base1,
  link: solarized.blue,
  notice: solarized.green,
  highlight: solarized.yellow,
}
