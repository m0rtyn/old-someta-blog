/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Heading, Box } from '@theme-ui/components';
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
        mb={3}
        title="So Meta — Такая Мета"
      >
        <SometaLogo />
      </Box>

      <Heading mb={13} sx={{ fontSize: [6] }} as="h2">
        Такая Мета
      </Heading>
      {/* <SocialLinks fontSize={4} /> */}
    </AuthorBanner>
  );
};

export default ProjectBanner;
