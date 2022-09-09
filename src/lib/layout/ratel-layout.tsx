import React, { HTMLAttributes } from 'react';

export type RatelLayoutProp = HTMLAttributes<HTMLDivElement>;

export const RatelLayout: React.FC<RatelLayoutProp> = (props: RatelLayoutProp) => {
  const { children, ...divProps } = props;

  return <div {...divProps}>{children}</div>;
};
