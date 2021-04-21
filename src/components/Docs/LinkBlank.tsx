import React from 'react';

interface Props {
  link: string;
  text: string;
}

const LinkBlank: React.FC<Props> = ({ link, text }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default LinkBlank;
