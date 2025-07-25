import React from 'react';
import Markdown from 'markdown-to-jsx';

const Comment = ({ comment }) => {
  const formattedComment = comment
    .replaceAll('\\n', '\n') // Convert literal \n to actual newlines
    .replace(/^[-*+]\s+/gm, '`-` ') // Replace bullets with inline code dash
    .replace(/(\d\..+)\n(?=\S)/g, '$1\n\n') // Add a blank line after numbered list items
    .replace(/([^\s])\n/g, '$1  \n') // Add two spaces before single newlines for proper markdown line breaks
    .replace(/\n\n/g, '\n\n'); // Preserve double line breaks

  return <Markdown>{formattedComment}</Markdown>;
};

export default Comment;
