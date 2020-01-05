import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

// --magic-bezier: cubic-bezier(.25, .8, .25, 1);

// // MONOKAI theme
// --color-dark: #2D2A2E;
// --color-light: #FCFCFA;
// --color-r: #FF6188;
// --color-g: #A9DC76;
// --color-o: #FC9867;
// --color-c: #78DCE8;
// --color-p: #AB9DF2;
// --color-y: #FFD866;
// --color-gray: #939293;

export default {
  ...chronoblogTheme,
  initialColorMode: 'dark',
  colors: {
    ...chronoblogTheme.colors,
    // ? Monokai theme
    // dark: '#2D2A2E',
    // light: '#FCFCFA',
    // red: '#FF6188',
    // green: '#A9DC76',
    // orange: '#FC9867',
    // cyan: '#78DCE8',
    // purple: '#AB9DF2',
    // yellow: '#FFD866',
    // gray: '#939293',
    text: '#FCFCFA',
    background: '#2D2A2E',
    link: '#FFD866',
    primary: '#AB9DF2',
    secondary: '#78DCE8',
    muted: '#939293'
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 0,
    button: 0,
    search: 0,
    code: 0,
    img: 0,
    authorBanner: 0
  },
  borderWidth: {
    card: 3,
    search: 3
  },
  fonts: {
    ...chronoblogTheme.fonts
  }
};
