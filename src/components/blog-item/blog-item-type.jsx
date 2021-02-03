/** @jsx jsx */
import { jsx } from 'theme-ui';
import ArticleIcon from './article.inline.svg';
import NoteIcon from './note.inline.svg';
import SequenceIcon from './queue.inline.svg';

const typeToEmojiMap = {
  article: <ArticleIcon />,
  note: <NoteIcon />,
  sequence: <SequenceIcon />
};

const typeToTitleMap = {
  article: 'Статья — длинный текст с картинками',
  note: 'Заметка — небольше 100 слов',
  sequence: 'Цепочка — серия связанных текстов'
};

export const BlogItemType = ({ type }) => {
  if (!type) return null;

  return (
    <span
      title={typeToTitleMap[type]}
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        m: 2,
        color: 'var(--color-gray)',
        cursor: 'help',
        '&:hover': {
          opacity: 0.6
        }
      }}
    >
      {typeToEmojiMap[type]}
    </span>
  );
};
