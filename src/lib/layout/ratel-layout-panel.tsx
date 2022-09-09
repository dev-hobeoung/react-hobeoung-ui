/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';

const RatelLayoutPanelStyledComponent = styled.div`
  background-color: brown;
  position: absolute;
`;

const RatelLayoutPanelMoverStyledComponent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.5rem;
  height: 0.5rem;
  background-color: blueviolet;
  cursor: move;
`;

const RatelLayoutPanelResizerStyledComponent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.5rem;
  height: 0.5rem;
  background-color: blueviolet;
  cursor: se-resize;
`;

export interface RatelLayoutPanelProp extends HTMLAttributes<HTMLDivElement> {
  movable?: boolean;
  resizable?: boolean;
  initStartPositionX?: number;
  initStartPositionY?: number;
  initEndPositionX?: number;
  initEndPositionY?: number;
}

export const RatelLayoutPanel: React.FC<RatelLayoutPanelProp> = (props: RatelLayoutPanelProp) => {
  const {
    children,
    movable = true,
    resizable = true,
    initStartPositionX = 100,
    initStartPositionY = 100,
    initEndPositionX = 170,
    initEndPositionY = 170,
    ...divProps
  } = props;

  const [position, setPosition] = useState<{
    startPositionX: number;
    startPositionY: number;
    endPositionX: number;
    endPositionY: number;
  }>({
    startPositionX: initStartPositionX,
    startPositionY: initStartPositionY,
    endPositionX: initEndPositionX,
    endPositionY: initEndPositionY,
  });

  // # Element Move Handler
  const moveHandler = () => {
    const onDragHandler = (e: MouseEvent) => {
      e.stopPropagation();
      const newStartPositionX = e.clientX;
      const newStartPositionY = e.clientY;
      const newEndPositionX = position.endPositionX + e.clientX - position.startPositionX;
      const newEndPositionY = position.endPositionY + e.clientY - position.startPositionY;
      setPosition({
        startPositionX: newStartPositionX,
        startPositionY: newStartPositionY,
        endPositionX: newEndPositionX,
        endPositionY: newEndPositionY,
      });
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onDragHandler);
    };

    window.addEventListener('mousemove', onDragHandler);
    window.addEventListener('mouseup', onMouseUp, { once: true });
  };

  // # Element Resize Handler
  const resizeHandler = () => {
    const onDragHandler = (e: MouseEvent) => {
      e.stopPropagation();
      setPosition({
        ...position,
        endPositionX: e.clientX,
        endPositionY: e.clientY,
      });
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onDragHandler);
    };

    window.addEventListener('mousemove', onDragHandler);
    window.addEventListener('mouseup', onMouseUp, { once: true });
  };

  return (
    <RatelLayoutPanelStyledComponent
      id="ratel-layout-panel"
      style={{
        left: position.startPositionX,
        top: position.startPositionY,
        width: position.endPositionX - position.startPositionX,
        height: position.endPositionY - position.startPositionY,
      }}
      {...divProps}
    >
      {children}
      {movable && (
        <RatelLayoutPanelMoverStyledComponent
          id="ratel-layout-panel-mover"
          onMouseDown={moveHandler}
        />
      )}
      {resizable && (
        <RatelLayoutPanelResizerStyledComponent
          id="ratel-layout-panel-resizer"
          onMouseDown={resizeHandler}
        />
      )}
    </RatelLayoutPanelStyledComponent>
  );
};
