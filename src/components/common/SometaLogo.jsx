/** @jsx jsx */

import { jsx } from 'theme-ui';

const SometaLogo = ({ logoColor = "dark", ...props }) => {
  const color = logoColor === "dark" ? "2D2A2E" : "#FCFCFA"

  return (<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 180 98"
    width="100%"
    color={color}
    {...props}
  >
    <defs />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M146 40l-22 33-23-33-34 57h14l20-31 23 31 22-31 19 31h15l-34-57zM81 47H44L68 7H55L24 59h36L37 97h15l29-50z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M25 98L12 77 0 98h25zM124 0l16 28h-32l16-28z"
    />
  </svg>)

}

export default SometaLogo;
