import React from 'react';

import { RatelTableProp } from './ratel-table';
import { RatelTableColumnCell } from './ratel-table-column-cell';
import { RatelTableColumnElement } from './ratel-table-column-element';
import { RatelTableDataCellEditable } from './ratel-table-data-cell-editable';
import { RatelTableDataElement } from './ratel-table-data-element';

export interface RatelTableEditableProp extends RatelTableProp {
  onEdit: (datas: RatelTableDataElement[]) => void;
}

export const RatelTableEditable: React.FC<RatelTableEditableProp> = (
  props: RatelTableEditableProp
) => {
  const { columns, datas, onEdit } = props;

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
        {datas.map((data: RatelTableDataElement, index: number) => (
          <tr>
            {columns.map((column: RatelTableColumnElement) => (
              <RatelTableDataCellEditable
                value={data[column.name]}
                onEdit={(value: string | number | undefined) => {
                  const editDatas: RatelTableDataElement[] = datas;
                  editDatas[index][column.name] = value;
                  onEdit(editDatas);
                }}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};