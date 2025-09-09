'use client';

import React from 'react';

type ButtonProps = {
  type: string;
  label: string;
  url: string;
};

function Button({ type = 'primary', label = 'Boka', url }: ButtonProps) {
  const primaryButtonStyle =
    'bg-primary text-light border-text hover:bg-light hover:text-primary hover:border-primary';
  const secondaryButtonStyle =
    'bg-light text-primary  hover:bg-primary hover:text-light hover:border-light';

  const typeOfButton =
    type === 'primary' ? primaryButtonStyle : secondaryButtonStyle;

  const targetValue = url.includes('mailto') ? '_self' : '_blank';

  return (
    <a
      href={url}
      target={targetValue}
      className={`${typeOfButton} cursor-pointer border rounded transition border-2 border-secondary text-center px-12 py-4`}>
      <button type="button" className="cursor-pointer">
        {label}
      </button>
    </a>
  );
}

export default Button;
