import React, { HTMLAttributes } from 'react';

export type RatelMenuDrawerProp = HTMLAttributes<HTMLDivElement>;

export const RatelMenuDrawer: React.FC<RatelMenuDrawerProp> = (props: RatelMenuDrawerProp) => {
  const { children } = props;
  return <div>{children}</div>;
};
