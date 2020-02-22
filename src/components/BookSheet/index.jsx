/** @jsx jsx */

import { jsx } from 'theme-ui';
import React from 'react';
import { uid } from 'react-uid';
import TriforceLoader from './TriforceLoader';
import TableRow, { TablePreloadedYears } from './TableRow';
import styles from './BookSheet.module.css';
import preloadedData from './preloadedData';

const BookSheet = () => {
  const [loading, setLoading] = React.useState(true);
  const [isSecondStageRender, setSecondStage] = React.useState(false);
  const [bookArray, setBookArray] = React.useState([]);

  React.useEffect(() => {
    const fetchBookArray = async () => {
      const apiURL = `https://script.google.com/macros/s/AKfycbyncOZcKRu3_shSLYYescpIelkontkjdTuCRONzfXIXK0Jl5Vqb/exec`;
      const response = await fetch(apiURL);
      const json = await response.json();

      setBookArray(json.result);
      setLoading(false);
    };

    fetchBookArray();
  }, []);

  return (
    <main className={`${styles.books} ${styles.basicPage}`}>
      <h1 className={styles.title}>Книжная таблицa</h1>

      <TriforceLoader loading={loading} />

      <table cellSpacing="0">
        <colgroup>
          <col className={styles.bookName} />
          <col className={styles.bookReview} />
        </colgroup>
        <thead>
          <tr>
            <th>Название книги</th>
            <th>Мнение</th>
          </tr>
        </thead>

        <tbody>
          {bookArray.map((row, i) => (
            <TableRow row={row} index={i} key={uid(row)} />
          ))}
        </tbody>

        {!loading && (
          <tfoot>
            <TablePreloadedYears data={preloadedData} />
          </tfoot>
        )}
      </table>
    </main>
  );
};

export default BookSheet;
