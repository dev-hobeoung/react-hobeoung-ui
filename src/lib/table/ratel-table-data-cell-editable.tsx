import React, { ChangeEvent, useState } from 'react';

import { RatelTableDataCell, RatelTableDataCellProp } from './ratel-table-data-cell';

export interface RatelTableDataCellEditableProp extends RatelTableDataCellProp {
  value: string | number | undefined;
  onEdit: (value: string | number | undefined) => void;
}

export const RatelTableDataCellEditable: React.FC<RatelTableDataCellEditableProp> = (
  props: RatelTableDataCellEditableProp
) => {
  const { value, onEdit, ...otherProps } = props;

  const [editValue, setEditValue] = useState<string | number | undefined>(value);
  const [editing, setEditing] = useState<boolean>(false);

  const startEditHandler = (): void => {
    setEditing(true);
  };

  const endEditHandler = (): void => {
    setEditing(false);
    onEdit(editValue);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const onDoubleClickHandler = () => {
    startEditHandler();
  };

  const onBlurHandler = () => {
    endEditHandler();
  };

  const onKeyDownEnterHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      endEditHandler();
    }
  };

  return (
    <RatelTableDataCell onDoubleClick={onDoubleClickHandler} {...otherProps}>
      {editing ? (
        <input
          type="text"
          value={editValue}
          autoFocus
          onChange={onChangeHandler}
          onKeyDown={onKeyDownEnterHandler}
          onBlur={onBlurHandler}
        />
      ) : (
        value
      )}
    </RatelTableDataCell>
  );
};
