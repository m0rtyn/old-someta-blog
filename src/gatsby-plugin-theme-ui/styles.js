import oceanicNext from '@theme-ui/prism/presets/oceanic-next.json';

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: '1.13em',
  mb: '0.9em'
};

export default {
  Container: {
    px: 3,
    py: 0,
    // minHeight: 'calc(100vh - 169px)', // 169px is temporary sum of header and footer heights
    maxWidth: 768,
    mx: 'auto',
    fontSize: [2, 3] // 18px
  },
  Footer: {
    py: ['16px !important', '24px !important'],
    color: 'modes.dark.text',
    bg: 'modes.dark.background'
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: 'img'
  },
  Layout: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body'
  },
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body'
  },
  links: {
    // textDecoration: 'secondary',
    color: 'link'
    // bold: {
    //   fontWeight: 'bold',
    // },
    // nav: {
    //   fontWeight: 'bold',
    //   color: 'inherit',
    //   textDecoration: 'none',
    // }
  },
  h1: {
    ...heading,
    fontSize: [7, 8]
  },
  h2: {
    ...heading,
    fontSize: [6, 7]
  },
  h3: {
    ...heading,
    fontSize: [5, 6]
  },
  h4: {
    ...heading,
    fontSize: [4]
  },
  h5: {
    ...heading,
    fontSize: [3]
  },
  h6: {
    ...heading,
    fontSize: [3]
  },
  p: {
    fontSize: [2, 3]
  },
  article: {
    fontSize: [2, 3]
  },
  li: {
    fontSize: [2, 3]
  },
  a: {
    color: 'currentcolor',
    ':hover': {
      opacity: 0.7
    }
  },
  pre: {
    fontFamily: 'monospace',
    fontSize: [2, 3],
    bg: 'muted',
    p: 3,
    borderRadius: 'code',
    overflowX: 'auto',
    variant: 'prism'
  },
  code: {
    ...oceanicNext
  },
  hr: {
    maxWidth: '400px',
    marginY: 40,
    opacity: 0.3,
    borderColor: 'muted'
  },
  blockquote: {
    px: 3,
    py: 3,
    mx: 0,
    my: 4,
    borderRadius: 'blockquote',
    borderStyle: 'solid',
    borderColor: 'primary',
    bg: 'transparent',
    color: 'text',
    fontSize: 3,

    'ul, ol': {
      px: 4,
      my: 0
    }
  }
};
