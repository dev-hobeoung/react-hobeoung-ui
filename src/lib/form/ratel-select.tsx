import React, { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelSelectStyledComponent = styled.select`
  border-width: 1px;
  background-color: #8c8c4e;
`;

export interface RatelSelectProp extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const RatelSelect: React.FC<RatelSelectProp> = (props: RatelSelectProp) => {
  const { label, children, ...selectProp } = props;
  return (
    <div>
      <div>{label}</div>
      <RatelSelectStyledComponent {...selectProp}>{children}</RatelSelectStyledComponent>
    </div>
  );
};
