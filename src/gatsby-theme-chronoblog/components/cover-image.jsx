/** @jsx jsx */
import GatsbyImage from 'gatsby-image';
import get from 'lodash/get';
import { jsx } from 'theme-ui';

const Image = (props) => <GatsbyImage {...props} />;

const CoverImageBase = ({
  data,
  type,
  height,
  coverFluidImage,
  objectFit = 'scale-down'
}) => {
  const { pathname } =
    typeof window !== 'undefined' && window.location;

  const borderRadiusForCard =
    type === 'card'
      ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
      : {};
  //
  //
  const imageTitle = get(data, 'frontmatter.title', '');
  const backdropFilterValue = `blur(9px) contrast(100%)`

  //
  return (
    <div
      sx={{
        maxHeight: height,
        // margin: isNotMainPage ? "-56px" : null,
        mb: 0,
      }}
    >
      <div
        sx={{
          backdropFilter: backdropFilterValue,
          WebkitBackdropFilter: backdropFilterValue,
          // backdropFilter: `drop-shadow(0px 0px 20px black)`,
          // boxShadow: 'inset 0px 0px 15px black',
          backgroundImage: `url(${coverFluidImage.src})`,
          backgroundSize: 'cover',
          maxHeight: height,
          backgroundPosition: 'center',
          borderRadius: 'card',
          ...borderRadiusForCard
        }}
      >
        <Image
          css={`
            @supports (backdrop-filter: blur(5px)) {
              background-color: rgba(255, 255, 255, 0);
            }
            background-color: rgba(40, 40, 40, 0.7);
          `}
          sx={{
            backdropFilter: backdropFilterValue,
            WebkitBackdropFilter: backdropFilterValue,
            maxHeight: height,
            minHeight: height,
            borderRadius: 'card',
            ...borderRadiusForCard
          }}
          imgStyle={{
            objectFit,
            objectPosition: '50% 50%'
          }}
          alt={imageTitle}
          title={imageTitle}
          fluid={coverFluidImage}
        />
      </div>
    </div>
  );
};


// eslint-disable-next-line react/display-name
export default ({ data, type = 'post' }) => {
  //
  const coverFluidImage = get(
    data,
    'frontmatter.cover.childImageSharp["fluid"]',
    undefined
  );

  if (!coverFluidImage) return <div />;
  //
  const heightMain = 366;
  const heightMobile = 183;
  const heightArray = [heightMobile, heightMain];

  //
  return (
    <CoverImageBase
      data={data}
      type={type}
      height={heightArray}
      coverFluidImage={coverFluidImage}
      objectFit="scale-down"
    />
  );
};