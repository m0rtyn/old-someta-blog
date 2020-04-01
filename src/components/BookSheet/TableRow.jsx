/** @jsx jsx */

import { jsx } from 'theme-ui';
import React from 'react';
import { uid } from 'react-uid';
import styles from './BookSheet.module.css';

const defineCellType = (i) => {
  switch (i) {
    case 0:
      return styles.bookName;
    case 1:
      return styles.bookReview;
    default:
      break;
  }

  return '';
};

const TableCell = ({ cell, index }) => (
  <td className={defineCellType(index)}>{cell}</td>
);

const TableRow = ({ row = [] }) => (
  <tr>
    {row.map((cell, i) => (
      <TableCell cell={cell} index={i} key={uid(cell)} />
    ))}
  </tr>
);

export const TablePreloadedYears = ({ data = [] }) => data
  .map((row, i) => row && (
    <TableRow row={row} index={i} key={uid(row)} />
  ));

export default TableRow;
