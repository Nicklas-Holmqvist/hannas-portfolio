import React from 'react';
type ListItemProps = {
  listDot: string;
  listText: string;
};

export default function ListItem({ listDot, listText }: ListItemProps) {
  return (
    <>
      {listDot === 'check' ? (
        <li>&#10003; {listText}</li>
      ) : (
        <li>&#10055; {listText}</li>
      )}
    </>
  );
}
