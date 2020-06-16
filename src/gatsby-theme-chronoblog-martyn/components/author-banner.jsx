// @jsx jsx

import { jsx } from 'theme-ui'
import {
  Avatar,
  Heading,
  Text,
  Flex,
  Box
} from '@theme-ui/components';
import React from 'react';
import useSiteMetadata from 'gatsby-theme-chronoblog/src/hooks/use-site-metadata';
import SocialLinks from 'gatsby-theme-chronoblog/src/components/social-links';
import logoAvatar from './avatar.jpg';
import styles from './author-banner.module.css';
/**
 * @typedef {object} AuthorBannerDescriptionProps
 * @property {React.ReactNode=} children
 */

/**
 * @param {AuthorBannerDescriptionProps=} props
 */

export const AuthorBannerDescription = ({ children, sx, ...props }) => {
  const siteMeta = useSiteMetadata();
  const style = { fontSize: [2], px: '2px', mb: '8px', ...sx };

  if (children)
    return (
      <Text sx={style} {...props}>
        {children}
      </Text>
    );
  if (siteMeta.authorDescription)
    return (
      <Text sx={style} {...props}>
        {siteMeta.authorDescription}
      </Text>
    );

  return <div />;
};

const AvatarWrapper = ({ children, style }) => (
  <figure className={styles.avatarContainer}>
    <Box className={styles.avatar} sx={style}>
      <div className={styles.avatarFront}>{children}</div>
      <Avatar
        className={styles.avatarBack}
        src={logoAvatar}
        alt="martyn's logo"
      />
    </Box>
  </figure>
);

export const AuthorBannerAvatar = ({ src = '', sx, ...props }) => {
  const siteMeta = useSiteMetadata();
  const avatarSize = [100, 144];
  const style = {
    width: avatarSize,
    height: avatarSize,
    ...sx
  };

  return src || siteMeta.avatar ? (
    <AvatarWrapper style={style}>
      <Avatar sx={style} src={src || siteMeta.avatar} {...props} />
    </AvatarWrapper>
  ) : (
      <div>No image data</div>
    );
};

/**
 * @typedef {object} AuthorBannerHeadingProps
 * @property {React.ReactNode =} children
 * @property {string =} as
 */

/**
 * @param {AuthorBannerHeadingProps =} props
 */
export const AuthorBannerHeading = ({
  as = 'h3',
  children,
  sx,
  ...props
}) => {
  const siteMeta = useSiteMetadata();
  const style = { fontSize: [1, 5], ...sx };

  if (children)
    return (
      <Heading sx={style} as={as} {...props}>
        {children}
      </Heading>
    );
  if (siteMeta.author)
    return (
      <Heading sx={style} as={as} {...props}>
        {siteMeta.author}
      </Heading>
    );

  return <div />;
};

const AuthorBannerMain = ({ children, sx, ...props }) => {
  return (
    <Flex
      sx={{
        borderRadius: 'authorBanner',
        alignItems: 'center',
        justifyContent: ['center', 'flex-start'],
        textAlign: ['center', 'left'],
        ...sx
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

const AuthorBanner = ({ children, sx, ...props }) => {
  const { socialLinks } = props;

  if (children) {
    return <AuthorBannerMain {...props}>{children}</AuthorBannerMain>;
  }

  return (
    <AuthorBannerMain
      {...props}
      sx={{
        bg: 'transparent',
        borderColor: 'secondary',
        borderWidth: '3px',
        borderStyle: 'solid',
        boxShadow: 'initial',
        flexDirection: ['column', 'row'],
        padding: [2, 3],
        ...sx
      }}
    >
      <AuthorBannerAvatar sx={{ mr: [0, 3], width: '100%' }} />

      <div>
        <AuthorBannerHeading as="h2" sx={{ fontSize: [3, 7] }} />
        <AuthorBannerDescription sx={{ fontSize: [1, 3] }} />
        <SocialLinks sx={{ fontSize: [3, 6] }} socialLinks={socialLinks} />
      </div>
    </AuthorBannerMain>
  );
};

export default AuthorBanner;
