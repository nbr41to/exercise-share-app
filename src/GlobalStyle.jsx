import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    /* selectorがbodyだとremの挙動がおかしい */
    font-family: 'Hiragino Kaku Gothic ProN';
    /* font-size:62.5%; */
    /* これで,デフォで10px */
    /* ならこれでよくね？ */
    font-size: 10px;
  }
`