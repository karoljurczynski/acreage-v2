import { createGlobalStyle } from 'styled-components';
// export const root = document.querySelector("#root") as HTMLElement;
// export const portal = document.querySelector("#portal") as HTMLElement;
// export const backgroundCloser = document.querySelector("#backgroundCloser") as HTMLElement;


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
    box-shadow: none;
    overflow: hidden;
  }

  /* #portal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    overflow-y: hidden;
    overflow-x: hidden;

    .grabbed {
      cursor: move;
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }

    :hover {
      cursor: move;
      cursor: grab;
      cursor: -moz-grab;
      cursor: -webkit-grab;
    }
  } */

  /* .backgroundCloser {
    position: absolute;
    top: 0;
    left: 0;
  } */
`;


export default GlobalStyles;