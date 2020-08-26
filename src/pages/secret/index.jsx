/** @jsx jsx */
import Layout from 'gatsby-theme-someta/src/components/layout';
import SEO from 'gatsby-theme-someta/src/components/seo';
import React from 'react';
import { Box, jsx } from 'theme-ui';

const SecretPage = () => {
  React.useEffect(() => {
    const canvas = document.getElementById('game-of-life');
    const ctx = canvas.getContext('2d');

    const resolution = 20;

    canvas.width = window.screen.width;
    canvas.height = window.screen.height;

    const COLS = canvas.width / resolution;
    const ROWS = canvas.height / resolution;

    function buildGrid() {
      return new Array(COLS)
        .fill(null)
        .map(() =>
          new Array(ROWS)
            .fill(null)
            .map(() => Math.floor(Math.random() * 2))
        );
    }

    let grid = buildGrid();

    function nextGen(grid) {
      const nextGen = grid.map(arr => [...arr]);

      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];
          let numNeighbours = 0;

          for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
              if (i === 0 && j === 0) {
                continue;
              }
              const x_cell = col + i;
              const y_cell = row + j;

              if (
                x_cell >= 0 &&
                y_cell >= 0 &&
                x_cell < COLS &&
                y_cell < ROWS
              ) {
                const currentNeighbour = grid[col + i][row + j];

                numNeighbours += currentNeighbour;
              }
            }
          }

          // rules
          if (cell === 1 && numNeighbours < 2) {
            nextGen[col][row] = 0;
          } else if (cell === 1 && numNeighbours > 3) {
            nextGen[col][row] = 0;
          } else if (cell === 0 && numNeighbours === 3) {
            nextGen[col][row] = 1;
          }
        }
      }

      return nextGen;
    }

    function render(grid) {
      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];

          ctx.beginPath();
          ctx.rect(
            col * resolution,
            row * resolution,
            resolution,
            resolution
          );
          ctx.fillStyle = cell ? '#EEE' : '#FFF';
          ctx.fill();
        }
      }
    }

    let prevTimestamp;

    function update(timestamp) {
      if (!prevTimestamp) {
        prevTimestamp = timestamp;
      }

      if (timestamp - prevTimestamp > 1000) {
        prevTimestamp = timestamp;
        grid = nextGen(grid);

        render(grid);
      }

      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, []);

  return (
    <Layout>
      <SEO title="0х00" />
      <canvas
        id="game-of-life"
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          zIndex: -1
        }}
      />

      <Box
        sx={{
          pt: 5,
          fontFamily: 'monospace',
          backgroundColor: 'transparent',
          fontSize: 5,
          height: '100vh'
        }}
      >
        <marquee behavior="alternate">
          🤔 Rebqta, ne stoit vskryvatь etu temu. Vy molodye,
          wutlivye, vam vse legko. eto ne to. eto ne Hikatilo i daжe
          ne arxivy specsluжb. <acronym title="Сюда">Sюda</acronym>{' '}
          luhwe ne leztь. Serьezno, lюboj iz vas budet жaletь. Luhwe
          zakrojte temu i zabudьte, hto tut pisalosь. Я vpolne
          ponimaю, hto dannym soobщeniem vyzovu dopolnitelьnyj
          interes, no xohu srazu predosterehь pytlivyx - stop.
          Ostalьnye prosto ne najdut 🤔
        </marquee>
        <marquee behavior="alternate" direction="up">
          🤔 Rebqta, ne stoit vskryvatь etu temu. Vy molodye,
          wutlivye, vam vse legko. eto ne to. eto ne Hikatilo i daжe
          ne arxivy specsluжb. Sюda luhwe ne leztь.{' '}
          <acronym title="Серьёзно">Serьezno</acronym>, lюboj iz vas
          budet жaletь. Luhwe zakrojte temu i zabudьte, hto tut
          pisalosь. Я vpolne ponimaю, hto dannym soobщeniem vyzovu
          dopolnitelьnyj interes, no xohu srazu predosterehь pytlivyx
          - stop. Ostalьnye prosto ne najdut 🤔
        </marquee>
        <marquee behavior="alternate" direction="right">
          🤔 Rebqta, ne stoit vskryvatь etu temu. Vy molodye,
          wutlivye, vam vse legko. eto ne to. eto ne Hikatilo i daжe
          ne arxivy specsluжb. Sюda luhwe ne leztь. Serьezno, lюboj iz
          vas budet жaletь. Luhwe zakrojte temu i zabudьte, hto tut
          pisalosь. Я vpolne ponimaю, hto dannym soobщeniem vyzovu
          dopolnitelьnyj interes, no xohu srazu predosterehь pytlivyx
          - <acronym title="Ок">stop</acronym>. Ostalьnye prosto ne
          najdut 🤔
        </marquee>
      </Box>
    </Layout>
  );
};

export default SecretPage;
