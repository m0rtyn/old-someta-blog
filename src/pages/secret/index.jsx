/** @jsx jsx */
import Layout from 'gatsby-theme-someta/src/components/layout';
import SEO from 'gatsby-theme-someta/src/components/seo';
import React from 'react';
import { Box, jsx } from 'theme-ui';

const SecretPage = () => {
  React.useEffect(() => {
    const canvas = document.getElementById('game-of-life');
    const ctx = canvas.getContext('2d');

    const resolution = 8;
    const { screen } = window;

    canvas.width = screen.width;
    canvas.height = screen.height;

    const COLS = Math.round(canvas.width / resolution);
    const ROWS = Math.round(canvas.height / resolution);

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

    const nextCell = (cell, numNeighbours) => {
      const isDeadlyNeighbours =
        numNeighbours < 2 || numNeighbours > 3;

      if (cell === 1 && isDeadlyNeighbours) {
        return 0;
      }
      if (cell === 0 && numNeighbours === 3) {
        return 1;
      }

      return cell;
    };

    function makeNextGen(grid) {
      const nextGen = grid.map(arr => [...arr]);

      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];
          let numNeighbours = 0;

          for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
              if (x === 0 && y === 0) {
                continue;
              }

              const xCell = col + x;
              const yCell = row + y;
              const isWithinBoundaries =
                xCell >= 0 &&
                yCell >= 0 &&
                xCell < COLS &&
                yCell < ROWS;

              if (isWithinBoundaries) {
                const currentNeighbour = grid[col + x][row + y];

                numNeighbours += currentNeighbour;
              }
            }
          }

          nextGen[col][row] = nextCell(cell, numNeighbours);
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
        grid = makeNextGen(grid);

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
