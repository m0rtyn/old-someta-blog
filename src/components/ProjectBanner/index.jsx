/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Box } from '@theme-ui/components';
import AuthorBanner from 'gatsby-theme-chronoblog/components/author-banner.jsx';
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
        sx={{ width: '133px', borderRadius: '0' }}
        mb={4}
        title="So Meta — Такая Мета"
      >
        <SometaLogo withTitle />
      </Box>
    </AuthorBanner>
  );
};

export default ProjectBanner;
