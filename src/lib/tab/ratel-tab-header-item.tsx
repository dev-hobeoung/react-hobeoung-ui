import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelTabHeaderItemStyledComponent = styled.button<{ selected: boolean }>`
  width: 6rem;
  background-color: ${props => (props.selected ? 'red' : 'orange')};
`;

export interface RatelTabHeaderItemProp extends HTMLAttributes<HTMLButtonElement> {
  onMouseDown: () => void;
  isSelected?: boolean;
}

export const RatelTabHeaderItem: React.FC<RatelTabHeaderItemProp> = (
  props: RatelTabHeaderItemProp
) => {
  const { children, isSelected = false, onMouseDown, ...buttonProps } = props;
  return (
    <RatelTabHeaderItemStyledComponent
      type="button"
      onMouseDown={onMouseDown}
      selected={isSelected}
      {...buttonProps}
    >
      {children}
    </RatelTabHeaderItemStyledComponent>
  );
};
