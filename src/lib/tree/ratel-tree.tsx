import React, { HTMLAttributes } from 'react';

import { RatelTreeNodeProp } from './ratel-tree-node';

export interface RatelTreeProp extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement<RatelTreeNodeProp> | React.ReactElement<RatelTreeNodeProp>[];
}

export const RatelTree: React.FC<RatelTreeProp> = (props: RatelTreeProp) => {
  const { children, ...divProps } = props;
  return <div {...divProps}>{children}</div>;
};
