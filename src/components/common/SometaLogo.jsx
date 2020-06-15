/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Heading } from '@theme-ui/components'
import SometaLogoWithTitle from './someta-logo-with-title.inline.svg'
import SometaLogoOnly from './someta-logo.inline.svg'

const SometaLogo = ({ width, withTitle = false, ...props }) => {
  const result = withTitle
    ? <SometaLogoWithTitle width={width} {...props} />
    : (
      <Heading sx={{ display: "flex" }} as="h1" >
        <SometaLogoOnly width={width} {...props} />
      </Heading>
    )

  return result;
}

export default SometaLogo;
