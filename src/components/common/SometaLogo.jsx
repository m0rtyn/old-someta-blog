/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Heading } from '@theme-ui/components'
import SometaLogoWithTitle from './someta-logo-with-title.inline.svg'
import SometaLogoOnly from './someta-logo.inline.svg'

const SometaLogo = ({ logoColor = "dark", width, withTitle = false, ...props }) => {
  const color = logoColor === "dark" ? "2D2A2E" : "#FCFCFA"

  return (
    <Heading sx={{ display: "flex" }} as="h1">
      {withTitle
        ? <SometaLogoWithTitle color={color} width={width} {...props} />
        : <SometaLogoOnly color={color} width={width} {...props} />}
    </Heading>
  )
}

export default SometaLogo;
