import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelTabBodyStyledComponent = styled.div`
  background-color: aliceblue;
  flex-grow: 1;
`;

export interface RatelTabBodyProp extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const RatelTabBody: React.FC<RatelTabBodyProp> = (props: RatelTabBodyProp) => {
  const { children, ...divProps } = props;
  return (
    <RatelTabBodyStyledComponent id="ratel-tab-body" {...divProps}>
      {children}
    </RatelTabBodyStyledComponent>
  );
};
