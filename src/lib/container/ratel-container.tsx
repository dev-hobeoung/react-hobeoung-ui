import React, { HTMLAttributes } from 'react';

export type RatelContainerProp = HTMLAttributes<HTMLDivElement>;

export const RatelContainer: React.FC<RatelContainerProp> = (props: RatelContainerProp) => {
  const { children, ...divProps } = props;
  return <div {...divProps}>{children}</div>;
};
