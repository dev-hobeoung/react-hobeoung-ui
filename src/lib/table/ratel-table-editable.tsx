import React from 'react';

import { RatelTableProp } from './ratel-table';
import { RatelTableColumnCell } from './ratel-table-column-cell';
import { RatelTableColumnElement } from './ratel-table-column-element';
import { RatelTableDataCell } from './ratel-table-data-cell';
import { RatelTableDataCellEditable } from './ratel-table-data-cell-editable';
import { RatelTableDataElement } from './ratel-table-data-element';

export interface RatelTableEditableProp extends RatelTableProp {
  onEdit: (datas: RatelTableDataElement[]) => void;
}

export const RatelTableEditable: React.FC<RatelTableEditableProp> = (
  props: RatelTableEditableProp
) => {
  const { columns, datas, onEdit, headProps, bodyProps, ...otherProps } = props;

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
            {columns.map((column: RatelTableColumnElement) =>
              column.render ? (
                <RatelTableDataCell>{column.render(data, index)}</RatelTableDataCell>
              ) : (
                <RatelTableDataCellEditable
                  value={data[column.name]}
                  onEdit={(value: string | number | undefined) => {
                    const editDatas: RatelTableDataElement[] = datas;
                    editDatas[index][column.name] = value;
                    onEdit(editDatas);
                  }}
                />
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
