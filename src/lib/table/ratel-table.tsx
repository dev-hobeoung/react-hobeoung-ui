import React, { HTMLAttributes } from 'react';

import { RatelTableColumnCell } from './ratel-table-column-cell';
import { RatelTableColumnElement } from './ratel-table-column-element';
import { RatelTableDataCell } from './ratel-table-data-cell';
import { RatelTableDataElement } from './ratel-table-data-element';

export interface RatelTableProp extends HTMLAttributes<HTMLTableElement> {
  columns: RatelTableColumnElement[];
  datas: RatelTableDataElement[];
  headProps?: React.HTMLAttributes<HTMLTableSectionElement>;
  bodyProps?: React.HTMLAttributes<HTMLTableSectionElement>;
}

export const RatelTable: React.FC<RatelTableProp> = (props: RatelTableProp) => {
  const { columns, datas, headProps, bodyProps, ...otherProps } = props;
  return (
    <table {...otherProps}>
      <thead {...headProps}>
        <tr>
          {columns.map((column: RatelTableColumnElement) => (
            <RatelTableColumnCell>{column.label || column.name}</RatelTableColumnCell>
          ))}
        </tr>
      </thead>
      <tbody {...bodyProps}>
        {datas.map((data: RatelTableDataElement, index: number) => (
          <tr>
            {columns.map((column: RatelTableColumnElement) => (
              <RatelTableDataCell>
                {column.render ? column.render(data, index) : data[column.name]}
              </RatelTableDataCell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
