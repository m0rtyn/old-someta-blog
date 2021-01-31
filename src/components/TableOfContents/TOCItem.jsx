import React from 'react';
import { Link } from '@theme-ui/components';

const TOCItem = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default TOCItem;
