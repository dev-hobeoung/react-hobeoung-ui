import React, { useState } from 'react';

import { RatelTabHeaderItem, RatelTabHeaderItemProp } from './ratel-tab-header-item';

export interface RatelTabHeaderItemEditableProp extends RatelTabHeaderItemProp {
  children: string;
  onEdit?: (cur: string, prev: string) => void;
}

export const RatelTabHeaderItemEditable: React.FC<RatelTabHeaderItemEditableProp> = (
  props: RatelTabHeaderItemEditableProp
) => {
  const { children, onEdit, ...otherProps } = props;

  const [name, setName] = useState<string>(children);
  const [editable, setEditable] = useState<boolean>(false);

  const setUneditable = () => {
    setEditable(false);
    if (onEdit) {
      onEdit(name, children);
    }
  };

  const onBlurHandler = () => {
    setUneditable();
  };

  const onKeyDownEnterHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setUneditable();
    }
  };

  const onDoubleClickHandler = () => {
    setName(children);
    setEditable(true);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <RatelTabHeaderItem onDoubleClick={onDoubleClickHandler} {...otherProps}>
      {editable ? (
        <input
          value={name}
          autoFocus
          onChange={onChangeHandler}
          onKeyDown={onKeyDownEnterHandler}
          onBlur={onBlurHandler}
        />
      ) : (
        children
      )}
    </RatelTabHeaderItem>
  );
};
