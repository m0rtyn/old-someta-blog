/** @jsx jsx */
import Layout from 'gatsby-theme-someta/src/components/layout';
import SEO from 'gatsby-theme-someta/src/components/seo';
import { GameOfLifeBackground } from 'react-game-of-life-background';
import { Flex, jsx } from 'theme-ui';

const MatrixMarquee = ({ children, delay }) => (
  <marquee
    direction="down"
    width="30px"
    height="100%"
    hspace="20px"
    vspace={-delay}
  >
    {children}
  </marquee>
);

const SecretPage = () => {
  return (
    <Layout>
      <SEO title="0х00" />
      <GameOfLifeBackground delay={1000} color="#EEE" />

      <Flex
        sx={{
          fontFamily: 'monospace',
          backgroundColor: 'transparent',
          fontSize: 5,
          height: '100vh',
          boxSizing: 'padding-box',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <MatrixMarquee>
          🤔 Rebqta, ne stoit vskryvatь etu temu. Vy molodye,
          wutlivye, vam vse legko.
        </MatrixMarquee>
        <MatrixMarquee delay="8px">
          Eto ne to. Eto ne Hikatilo i daжe ne arxivy specsluжb. Sюda
          luhwe ne leztь.
        </MatrixMarquee>
        <MatrixMarquee delay="-30px">
          <acronym title="Серьёзно">Serьezno</acronym>, lюboj iz vas
          budet жaletь. Luhwe zakrojte temu i zabudьte, hto tut
          pisalosь.
        </MatrixMarquee>
        <MatrixMarquee delay="10px">
          Я vpolne ponimaю, hto dannym soobщeniem vyzovu
          dopolnitelьnyj interes, no xohu srazu predosterehь pytlivyx
          - stop.
        </MatrixMarquee>
        <MatrixMarquee delay="100px">
          Ostalьnye prosto ne najdut 🤔
        </MatrixMarquee>
      </Flex>
    </Layout>
  );
};

export default SecretPage;
