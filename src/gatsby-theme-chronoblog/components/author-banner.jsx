/** @jsx jsx */
import { Avatar, Heading, Text } from '@theme-ui/components';
import { jsx } from 'theme-ui';

import useSiteMetadata from 'gatsby-theme-chronoblog/src/hooks/use-site-metadata';
import SocialLinks from 'gatsby-theme-chronoblog/src/components/social-links';
import logoAvatar from './avatar.jpg';
import styles from './styles.module.css';

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

export const AuthorBannerAvatar = ({ src = '', ...props }) => {
  const siteMeta = useSiteMetadata();
  const style = {
    marginX: '30px',
    my: '10px',
    boxShadow: '0 2px 4px 0 hsla(0, 0%, 0%, .2)',
  };

  if (src) return <Avatar sx={style} src={src} {...props} />;
  if (siteMeta.avatar)
    return <Avatar sx={style} src={siteMeta.avatar} {...props} />;

  return <div sx={{ marginX: '10px' }} />;
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
    <div
      sx={{
        bg: 'muted',
        borderRadius: 'authorBanner',
        px: '4px',
        py: '16px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: ['center', 'flex-start'],
        textAlign: ['center', 'left'],
        boxShadow: `0 1px 3px hsla(0,0%,0%,.2)`,
        textShadow: `0 1px 2px hsla(0,0%,0%,.1)`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const AuthorBanner = ({ children, ...props }) => {
  if (children) {
    return <AuthorBannerMain {...props}>{children}</AuthorBannerMain>;
  }

  //
  return (
    <AuthorBannerMain
      {...props}
      sx={{
        bg: 'transparent',
        borderColor: 'secondary',
        borderWidth: '3px',
        borderStyle: 'solid',
        boxShadow: 'initial',
      }}
    >
      <figure className={styles.avatarContainer}>
        <div className={styles.avatar}>
          <div className={styles.avatarFront}>
            <AuthorBannerAvatar sx={{ margin: 0, width: '100%' }} />
          </div>
          <img
            className={styles.avatarBack}
            src={logoAvatar}
            alt="martyn's logo"
          />
        </div>
      </figure>

      <div>
        <AuthorBannerHeading as="h2" sx={{ fontSize: [7] }} />
        <AuthorBannerDescription />
        <SocialLinks fontSize="32px" />
      </div>
    </AuthorBannerMain>
  );
};

export default AuthorBanner;
