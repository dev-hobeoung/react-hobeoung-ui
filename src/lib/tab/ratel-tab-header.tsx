import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelTabHeaderStyledComponent = styled.div`
  height: 1.5rem;
  background-color: indigo;
`;

export type RatelTabHeaderProp = HTMLAttributes<HTMLDivElement>;

export const RatelTabHeader: React.FC<RatelTabHeaderProp> = (props: RatelTabHeaderProp) => {
  const { children, ...divProps } = props;
  return (
    <RatelTabHeaderStyledComponent id="ratel-tab-header" {...divProps}>
      {children}
    </RatelTabHeaderStyledComponent>
  );
};
