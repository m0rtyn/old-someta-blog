import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'dark',
  colors: {
    // ...chronoblogTheme.colors,
    text: '#FCFCFA',
    background: '#2D2A2E',
    link: '#FFD866',
    primary: '#AB9DF2',
    secondary: '#78DCE8',
    muted: '#939293',
    modes: {
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#FCFCFA',
        background: '#2D2A2E',
        link: '#FFD866',
        primary: '#AB9DF2',
        secondary: '#78DCE8',
        muted: '#939293',
      },
    },
  },
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
  },
  fonts: {
    ...chronoblogTheme.fonts,
    heading:
      '"Anonymous Pro", Helvetica Neue, Helvetica, Arial, sans-serif',
  },
};
