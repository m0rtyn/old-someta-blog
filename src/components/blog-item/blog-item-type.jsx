/** @jsx jsx */
import { jsx } from 'theme-ui';
import ArticleIcon from './article.inline.svg';
import NoteIcon from './note.inline.svg';
import SequenceIcon from './queue.inline.svg';

const typeToEmojiMap = {
  article: <ArticleIcon title="статья" />,
  note: <NoteIcon title="заметка" />,
  sequence: <SequenceIcon title="цепочка" />
};

export const BlogItemType = ({ type }) => {
  if (!type) return null;

  return (
    <span
      title={type}
      sx={{
        // fontSize: '2em',
        position: 'absolute',
        top: '0',
        left: '0',
        mx: 4,
        my: 2,
        color: 'var(--color-gray)'
      }}
    >
      {typeToEmojiMap[type]}
    </span>
  );
};
