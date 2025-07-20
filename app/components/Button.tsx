import React from 'react';

type ButtonProps = {
  label: string;
  url: string;
  onClick: (url: string) => void;
};

function Button({ label = 'Boka', onClick, url }: ButtonProps) {
  return (
    <button onClick={() => onClick(url)} className="py-2 px-6 border rounded">
      {label}
    </button>
  );
}

export default Button;
