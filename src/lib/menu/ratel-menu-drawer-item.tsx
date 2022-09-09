import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelMenuDrawerItemStyledComponent = styled.button`
  width: 4rem;
  :focus {
    background-color: coral;
  }
`;

export interface RatelMenuDrawerItemProp extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const RatelMenuDrawerItem: React.FC<RatelMenuDrawerItemProp> = (
  props: RatelMenuDrawerItemProp
) => {
  const { children, label } = props;
  return (
    <>
      <RatelMenuDrawerItemStyledComponent type="button" {...props}>
        {label}
      </RatelMenuDrawerItemStyledComponent>
      {children}
    </>
  );
};
