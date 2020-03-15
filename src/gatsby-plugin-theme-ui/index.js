import base from '@theme-ui/preset-base';
import prism from '@theme-ui/prism/presets/theme-ui';

import buttons from './buttons';
import colors from './colors';
import styles from './styles';

const theme = {
  ...base,
  initialColorMode: 'light',
  useColorSchemeMediaQuery: false,
  colors: {
    ...colors,
  },
  breakpoints: ['768px', '1024px'],
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    card: 0,
    button: 0,
    search: 0,
    code: 0,
    img: 0,
    authorBanner: 0,
    blockquote: 0,
  },
  borderWidth: {
    card: 3,
    search: 3,
    blockquote: 3,
  },
  fonts: {
    body:
      '-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading:
      '"Anonymous Pro", Helvetica Neue, Helvetica, Arial, sans-serif',
    monospace: 'Menlo, monospace',
  },
  prism,
  styles: {
    ...base.styles,
    ...styles,
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    tags: {
      color: 'inherit',
      bg: 'transparent',
      opacity: 0.7,
    },
  },
  buttons: {
    ...buttons,
  },
  images: {
    avatar: {
      width: 140,
      height: '100%',
      borderRadius: 99999,
    },
  },
};

export default theme;
