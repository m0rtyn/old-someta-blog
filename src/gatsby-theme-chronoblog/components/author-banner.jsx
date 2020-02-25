/** @jsx jsx */

import {
  Avatar,
  Heading,
  Text,
  Flex,
  Box
} from '@theme-ui/components';
import { jsx } from 'theme-ui';

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

export const AuthorBannerDescription = ({ children, ...props }) => {
  const siteMeta = useSiteMetadata();
  const style = { fontSize: [2], px: '2px', mb: '8px' };

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

export const AuthorBannerAvatar = ({ src = '', ...props }) => {
  const siteMeta = useSiteMetadata();
  const style = {
    width: '144px',
    height: '144px'
  };

  return src || siteMeta.avatar ? (
    <AvatarWrapper style={style}>
      <Avatar sx={style} src={src || siteMeta.avatar} {...props} />
    </AvatarWrapper>
  ) : (
      <div sx={{ marginX: '10px' }}>No image data</div>
    );
};

/**
 * @typedef {object} AuthorBannerHeadingProps
 * @property {React.ReactNode=} children
 * @property {string=} as
 */

/**
 * @param {AuthorBannerHeadingProps=} props
 */
export const AuthorBannerHeading = ({
  as = 'h3',
  children,
  ...props
}) => {
  const siteMeta = useSiteMetadata();
  const style = { fontSize: [5] };

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

const AuthorBannerMain = ({ children, ...props }) => {
  return (
    <Flex
      sx={{
        borderRadius: 'authorBanner',
        alignItems: 'center',
        justifyContent: ['center', 'flex-start'],
        textAlign: ['center', 'left']
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

const AuthorBanner = ({ children, ...props }) => {
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
        ...props.sx
      }}
    >
      <AuthorBannerAvatar sx={{ margin: 0, width: '100%' }} />

      <div>
        <AuthorBannerHeading as="h2" sx={{ fontSize: [7] }} />
        <AuthorBannerDescription />
        <SocialLinks fontSize="32px" socialLinks={socialLinks} />
      </div>
    </AuthorBannerMain>
  );
};

export default AuthorBanner;
