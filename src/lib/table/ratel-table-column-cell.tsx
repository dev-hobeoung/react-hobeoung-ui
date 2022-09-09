/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';

const RatelTableColumnCellStyledComponent = styled.th`
  border-width: 1px;
  text-align: start;
  background-color: grey;
`;

const RatelTableColumnCellFrameStyledComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const RatelTableColumnCellResizerStyledComponent = styled.div`
  background-color: coral;
  position: absolute;
  top: 0;
  right: -2px;
  width: 1px;
  height: 100%;
  cursor: col-resize;
`;

export interface RatelTableColumnCellProp extends HTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

export const RatelTableColumnCell: React.FC<RatelTableColumnCellProp> = (
  props: RatelTableColumnCellProp
) => {
  const { children } = props;

  const [width, setWidth] = useState<number>(100);

  // # Element Resize Handler
  const resizeHandler = (startEvent: React.MouseEvent) => {
    const startWidth: number = width;
    const startPosition: number = startEvent.clientX;

    const onDragHandler = (e: MouseEvent) => {
      e.stopPropagation();
      setWidth(startWidth + e.clientX - startPosition);
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onDragHandler);
    };

    window.addEventListener('mousemove', onDragHandler);
    window.addEventListener('mouseup', onMouseUp, { once: true });
  };

  return (
    <RatelTableColumnCellStyledComponent style={{ width }}>
      <RatelTableColumnCellFrameStyledComponent>
        {children}
        <RatelTableColumnCellResizerStyledComponent onMouseDown={resizeHandler} />
      </RatelTableColumnCellFrameStyledComponent>
    </RatelTableColumnCellStyledComponent>
  );
};
