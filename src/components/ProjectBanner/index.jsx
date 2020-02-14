/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Avatar, Heading } from '@theme-ui/components';
import AuthorBanner from 'gatsby-theme-chronoblog/components/author-banner.jsx';
import SocialLinks from 'gatsby-theme-chronoblog/src/components/social-links';

const ProjectBanner = () => {
  return (
    <AuthorBanner
      sx={{
        flexDirection: 'column',
        bg: 'transparent',
        boxShadow: 'initial',
        marginBottom: 4
      }}
    >
      <Avatar
        src="/someta-logo-light.png"
        sx={{ width: '133px', borderRadius: '0' }}
        my={3}
      />
      <Heading sx={{ fontSize: [7] }} as="h2">
        Такая Мета
      </Heading>
      <SocialLinks fontSize="30px" />
    </AuthorBanner>
  );
};

export default ProjectBanner;
