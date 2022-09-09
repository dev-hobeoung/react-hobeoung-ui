import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelMenuItemStyledComponent = styled.button`
  width: 4rem;
  :focus {
    background-color: coral;
  }
`;

export interface RatelMenuItemProp extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const RatelMenuItem: React.FC<RatelMenuItemProp> = (props: RatelMenuItemProp) => {
  const { children, label, ...buttonProps } = props;
  return (
    <>
      <RatelMenuItemStyledComponent type="button" {...buttonProps}>
        {label}
      </RatelMenuItemStyledComponent>
      {children}
    </>
  );
};
