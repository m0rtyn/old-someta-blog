/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Avatar, Heading } from '@theme-ui/components';
import AuthorBanner from 'gatsby-theme-chronoblog/components/author-banner.jsx';
import SocialLinks from 'gatsby-theme-chronoblog/src/components/social-links';

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
      <Avatar
        src="/someta-logo-light.png"
        sx={{ width: '133px', borderRadius: '0' }}
        mb={3}
      />
      <Heading mb={13} sx={{ fontSize: [6] }} as="h2">
        Такая Мета
      </Heading>
      {/* <SocialLinks fontSize={4} /> */}
    </AuthorBanner>
  );
};

export default ProjectBanner;
