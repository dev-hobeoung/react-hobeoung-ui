import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelToolbarButtonItemStyledComponent = styled.button`
  margin: 0.25rem;
  cursor: pointer;
`;

export interface RatelToolbarButtonItemProp extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const RatelToolbarButtonItem: React.FC<RatelToolbarButtonItemProp> = (
  props: RatelToolbarButtonItemProp
) => {
  const { children, ...buttonProps } = props;
  return (
    <RatelToolbarButtonItemStyledComponent type="button" {...buttonProps}>
      {children}
    </RatelToolbarButtonItemStyledComponent>
  );
};
