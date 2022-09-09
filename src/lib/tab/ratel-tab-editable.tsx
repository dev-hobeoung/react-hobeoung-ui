import React from 'react';
import styled from 'styled-components';

import { RatelTabProp } from './ratel-tab';
import { RatelTabBody } from './ratel-tab-body';
import { RatelTabBodyItem } from './ratel-tab-body-item';
import { RatelTabElement } from './ratel-tab-element';
import { RatelTabHeader } from './ratel-tab-header';
import { RatelTabHeaderItem } from './ratel-tab-header-item';
import { RatelTabHeaderItemEditable } from './ratel-tab-header-item-editable';

const RatelTabEditableStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: cadetblue;
`;

export interface RatelTabEditableProp extends RatelTabProp {
  onEdit: (newName: string, prevName: string) => void;
}

export const RatelTabEditable: React.FC<RatelTabEditableProp> = (props: RatelTabEditableProp) => {
  const {
    elements = [],
    selected,
    onAdd,
    onSelected,
    onEdit,
    bodyProps = {},
    bodyItemProps = {},
    headerProps = {},
    headerItemProps = {},
    children,
    ...divProps
  } = props;

  return (
    <RatelTabEditableStyledComponent id="ratel-tab-editable" {...divProps}>
      <RatelTabHeader {...headerProps}>
        {elements.map((element: RatelTabElement) => (
          <RatelTabHeaderItemEditable
            isSelected={selected === element.name}
            onMouseDown={() => {
              onSelected(element.name);
            }}
            onEdit={onEdit}
            {...headerItemProps}
          >
            {element.name}
          </RatelTabHeaderItemEditable>
        ))}
        {onAdd && (
          <RatelTabHeaderItem
            className="w-8"
            onMouseDown={() => {
              onAdd();
            }}
          >
            +
          </RatelTabHeaderItem>
        )}
      </RatelTabHeader>
      <RatelTabBody {...bodyProps}>
        {children}
        {elements
          .filter((element: RatelTabElement) => element.content)
          .map((element: RatelTabElement) => (
            <RatelTabBodyItem isSelected={element.name === selected} {...bodyItemProps}>
              {element.content}
            </RatelTabBodyItem>
          ))}
      </RatelTabBody>
    </RatelTabEditableStyledComponent>
  );
};
