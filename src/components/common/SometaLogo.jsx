/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';
import { Heading } from '@theme-ui/components';
import SometaLogoRounded from './someta-logo-rounded.inline.svg';
import SometaLogoWithTitle from './someta-logo-with-title.inline.svg';
import SometaLogoOnly from './someta-logo.inline.svg';
import styles from './so-meta-logo.module.css';

const SometaLogo = ({
  width,
  withTitle = false,
  logoColor,
  ...props
}) => {
  const result = withTitle ? (
    <>
      <SometaLogoRounded width={width} {...props} />
      <Heading className={styles.logoTitle} as="h1">
        So meta
      </Heading>
    </>
  ) : (
    <Heading sx={{ display: 'flex' }} as="h1">
      <SometaLogoOnly width={width} {...props} />
    </Heading>
  );

  return result;
};

export default SometaLogo;
