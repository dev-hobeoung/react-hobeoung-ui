import React, { HTMLAttributes } from 'react';

export interface RatelToolbarItemProp extends HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export const RatelToolbarItem: React.FC<RatelToolbarItemProp> = (props: RatelToolbarItemProp) => {
  const { children, ...spanProps } = props;
  return <span {...spanProps}>{children}</span>;
};
