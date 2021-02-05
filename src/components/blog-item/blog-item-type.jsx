/** @jsx jsx */
import { jsx } from 'theme-ui';
import ArticleIcon from './article.inline.svg';
import NoteIcon from './note.inline.svg';
import SequenceIcon from './queue.inline.svg';
import MediaIcon from './media.inline.svg';

const typeToEmojiMap = {
  article: <ArticleIcon />,
  note: <NoteIcon />,
  sequence: <SequenceIcon />,
  media: <MediaIcon />
};

const typeToTitleMap = {
  article: 'Статья — длинный текст с картинками',
  note: 'Заметка — небольше 100 слов',
  sequence: 'Цепочка — серия связанных текстов',
  media: 'Медиа — видео, аудио или что-то не текстовое'
};

export const BlogItemType = ({ type }) => {
  if (!type) return null;

  return (
    <span
      title={typeToTitleMap[type]}
      sx={{
        position: 'absolute',
        display: 'flex',
        top: '0',
        left: '0',
        m: 2,
        cursor: 'help',
        color: '#000a',
        backgroundColor: '#fffa',
        borderRadius: 'card',
        px: 1,
        '&:hover': {
          opacity: 0.6
        }
      }}
    >
      {typeToEmojiMap[type]}
    </span>
  );
};
