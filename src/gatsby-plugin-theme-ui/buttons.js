const buttonStyle = {
  bg: 'text',
  color: 'background',
  userSelect: 'none',
  display: 'inline-block',
  px: '16px',
  py: '8px',
  fontSize: [1],
  fontFamily: 'inherit',
  border: '0px',
  borderRadius: 'button',
  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer',
    boxShadow: (theme) => `inset 0 0 0 2px ${theme.colors.secondary}`,
  },
  '&:focus': {
    outline: '0px',
  },
};

export default {
  primary: {
    ...buttonStyle,
  },
  active: {
    ...buttonStyle,
    color: 'background',
    bg: 'secondary',
  },
  special: {
    ...buttonStyle,
    boxShadow: (theme) => `inset 0 0 0 2px ${theme.colors.muted}`,
    bg: 'rgba(0,0,0,0)',
  },
};
