import base from '@theme-ui/preset-base';
import prism from '@theme-ui/prism/presets/theme-ui';

import buttons from './buttons';
import colors from './colors';
import styles from './styles';
import typography from './typography';

const theme = {
  ...base,
  ...typography,
  initialColorMode: 'light',
  useColorSchemeMediaQuery: false,
  colors: {
    ...colors
  },
  breakpoints: ['768px', '1024px'],
  borderRadius: {
    card: 4,
    button: 0,
    search: 0,
    code: 0,
    img: 0,
    authorBanner: 0,
    blockquote: 0
  },
  borderWidth: {
    card: 3,
    search: 3,
    blockquote: 3
  },
  prism,
  styles: {
    ...base.styles,
    ...styles
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'primary'
    },
    tags: {
      color: 'inherit',
      bg: 'transparent',
      opacity: 0.7
    }
  },
  buttons: {
    ...buttons
  },
  images: {
    avatar: {
      width: 140,
      height: '100%',
      borderRadius: 99999
    }
  }
};

export default theme;
