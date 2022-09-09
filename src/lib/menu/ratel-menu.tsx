import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelMenuStyledComponent = styled.div`
  display: flex;
  height: 1.5rem;
  background-color: azure;
`;

export type RatelMenuProp = HTMLAttributes<HTMLDivElement>;

export const RatelMenu: React.FC<RatelMenuProp> = (props: RatelMenuProp) => {
  const { children } = props;
  return <RatelMenuStyledComponent>{children}</RatelMenuStyledComponent>;
};
