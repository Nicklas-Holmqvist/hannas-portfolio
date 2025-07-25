import React from 'react';

type ButtonProps = {
  type: string;
  label: string;
  url: string;
  onClick: (url: string) => void;
};

function Button({
  type = 'primary',
  label = 'Boka',
  onClick,
  url,
}: ButtonProps) {
  const primaryButtonStyle =
    'bg-primary text-light border-text hover:bg-light hover:text-primary hover:border-primary';
  const secondaryButtonStyle =
    'bg-light text-primary  hover:bg-primary hover:text-light hover:border-light';

  const typeOfButton =
    type === 'primary' ? primaryButtonStyle : secondaryButtonStyle;

  return (
    <button
      type="button"
      onClick={() => onClick(url)}
      className={`${typeOfButton} cursor-pointer py-2 px-6 border rounded transition border-2 border-secondary`}>
      {label}
    </button>
  );
}

export default Button;
