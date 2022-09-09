import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelToolbarStyledComponent = styled.div`
  width: 100%;
  background-color: red;
`;

export interface RatelToolbarProp extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const RatelToolbar: React.FC<RatelToolbarProp> = (props: RatelToolbarProp) => {
  const { children } = props;
  return <RatelToolbarStyledComponent id="ratel-toolbar">{children}</RatelToolbarStyledComponent>;
};
