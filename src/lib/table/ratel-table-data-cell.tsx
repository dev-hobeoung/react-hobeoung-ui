import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelTableDataCellStyledComponent = styled.td`
  border-width: 1px;
  text-overflow: ellipsis;
`;

export interface RatelTableDataCellProp extends HTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

export const RatelTableDataCell: React.FC<RatelTableDataCellProp> = (
  props: RatelTableDataCellProp
) => {
  const { children, ...tableCellProps } = props;

  return (
    <RatelTableDataCellStyledComponent {...tableCellProps}>
      {children}
    </RatelTableDataCellStyledComponent>
  );
};
