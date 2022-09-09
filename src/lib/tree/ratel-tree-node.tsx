import React from 'react';
import styled from 'styled-components';

const RatelTreeNodeStyledComponent = styled.div`
  position: relative;
  left: 1rem;
`;

export interface RatelTreeNodeProp {
  node?: React.ReactNode;
  children?: React.ReactElement<RatelTreeNodeProp> | React.ReactElement<RatelTreeNodeProp>[];
  expand?: boolean;
}

export const RatelTreeNode: React.FC<RatelTreeNodeProp> = (props: RatelTreeNodeProp) => {
  const { node, children, expand = true } = props;
  return (
    <>
      <div>{node}</div>
      {expand && <RatelTreeNodeStyledComponent>{children}</RatelTreeNodeStyledComponent>}
    </>
  );
};
