import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelTabBodyItemStyledComponent = styled.div<{ selected: boolean }>`
  width: 100%;
  height: 100%;
  display: ${props => (props.selected ? 'block' : 'none')};
`;

export interface RatelTabBodyItemProp extends HTMLAttributes<HTMLDivElement> {
  isSelected: boolean;
}

export const RatelTabBodyItem: React.FC<RatelTabBodyItemProp> = (props: RatelTabBodyItemProp) => {
  const { children, isSelected, ...divProps } = props;
  return (
    <RatelTabBodyItemStyledComponent id="ratel-tab-body-item" selected={isSelected} {...divProps}>
      {children}
    </RatelTabBodyItemStyledComponent>
  );
};
