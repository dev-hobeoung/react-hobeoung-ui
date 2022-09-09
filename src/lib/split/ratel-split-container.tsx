import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { RatelSplitPanel } from './ratel-split-panel';

const RatelSplitContainerStyledComponent = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${props => (props.direction === 'col' ? 'column' : 'row')};
  height: 100%;
  width: 100%;
`;

export interface RatelSplitContainerProp extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode[];
  direction?: string;
}

export const RatelSplitContainer: React.FC<RatelSplitContainerProp> = (
  props: RatelSplitContainerProp
) => {
  const { children = [], direction = 'col', ...divProps } = props;

  return (
    <RatelSplitContainerStyledComponent
      id="ratel-split-container"
      direction={direction}
      {...divProps}
    >
      {children.map((child: React.ReactNode, index: number) => (
        <RatelSplitPanel resizer={children.length - 1 !== index} direction={direction}>
          {child}
        </RatelSplitPanel>
      ))}
    </RatelSplitContainerStyledComponent>
  );
};
