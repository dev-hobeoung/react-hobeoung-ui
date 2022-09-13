import React, { HTMLAttributes } from 'react';

import { RatelTableColumnCell } from './ratel-table-column-cell';
import { RatelTableColumnElement } from './ratel-table-column-element';
import { RatelTableDataCell } from './ratel-table-data-cell';
import { RatelTableDataElement } from './ratel-table-data-element';

export interface RatelTableProp extends HTMLAttributes<HTMLTableElement> {
  columns: RatelTableColumnElement[];
  datas: RatelTableDataElement[];
}

export const RatelTable: React.FC<RatelTableProp> = (props: RatelTableProp) => {
  const { columns, datas } = props;
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column: RatelTableColumnElement) => (
            <RatelTableColumnCell>{column.label || column.name}</RatelTableColumnCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {datas.map((data: RatelTableDataElement) => (
          <tr>
            {columns.map((column: RatelTableColumnElement) => (
              <RatelTableDataCell>
                {column.render ? column.render(data) : data[column.name]}
              </RatelTableDataCell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
