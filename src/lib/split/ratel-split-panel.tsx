import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';

const RatelSplitPanelStyledComponent = styled.div<{
  grow: boolean;
}>`
  background-color: antiquewhite;
  overflow: scroll;
  flex-grow: ${props => props.grow && 1};
`;

const RatelSplitPanelResizerStyledComponent = styled.div<{ direction: string }>`
  background-color: darkorange;
  cursor: ${props => (props.direction === 'col' ? 'ns-resize' : 'ew-resize')};
  height: ${props => props.direction === 'col' && '0.125rem'};
  width: ${props => props.direction !== 'col' && '0.125rem'};
`;

export interface RatelSplitPanelProp extends HTMLAttributes<HTMLDivElement> {
  resizer?: boolean;
  direction?: string;
}

export const RatelSplitPanel: React.FC<RatelSplitPanelProp> = (props: RatelSplitPanelProp) => {
  const { children, resizer = true, direction = 'col', ...divProps } = props;

  const [size, setSize] = useState<number>(100);

  const resizeHandler = (startEvent: React.MouseEvent) => {
    const startSize = size;
    const startPosition = direction === 'col' ? startEvent.pageY : startEvent.pageX;

    const onMouseMove = (moveEvent: MouseEvent) => {
      setSize(
        Math.max(
          startSize - startPosition + (direction === 'col' ? moveEvent.pageY : moveEvent.pageX),
          0
        )
      );
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
    };

    // TODO: Resize 중 Drag Event 막아야 함
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp, { once: true });
  };

  return (
    <>
      <RatelSplitPanelStyledComponent
        id="ratel-split-panel"
        grow={!resizer}
        // eslint-disable-next-line no-nested-ternary
        style={resizer ? (direction === 'col' ? { height: size } : { width: size }) : {}}
        {...divProps}
      >
        {children}
      </RatelSplitPanelStyledComponent>
      {resizer && (
        <RatelSplitPanelResizerStyledComponent
          id="ratel-split-panel-resizer"
          direction={direction}
          onMouseDown={resizeHandler}
        />
      )}
    </>
  );
};
