/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Box } from '@theme-ui/components';
import AuthorBanner from 'gatsby-theme-someta/components/author-banner.jsx';
import SometaLogo from 'components/common/SometaLogo';


const ProjectBanner = () => {
  return (
    <AuthorBanner
      sx={{
        mb: '32px',
        flexDirection: 'column',
        bg: 'transparent',
        boxShadow: 'initial'
      }}
    >
      <Box
        sx={{ width: 160, mt: 2, mb: 4, borderRadius: '0' }}
        title="So Meta — Такая Мета"
      >
        <SometaLogo withTitle />
      </Box>
    </AuthorBanner>
  );
};

export default ProjectBanner;
