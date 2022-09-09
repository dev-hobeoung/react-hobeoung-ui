import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { RatelTabBody, RatelTabBodyProp } from './ratel-tab-body';
import { RatelTabBodyItem, RatelTabBodyItemProp } from './ratel-tab-body-item';
import { RatelTabElement } from './ratel-tab-element';
import { RatelTabHeader, RatelTabHeaderProp } from './ratel-tab-header';
import { RatelTabHeaderItem, RatelTabHeaderItemProp } from './ratel-tab-header-item';

const RatelTabStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: cornflowerblue;
`;

export interface RatelTabProp extends HTMLAttributes<HTMLDivElement> {
  elements?: RatelTabElement[];
  selected?: string;
  onSelected: (name: string) => void;
  onAdd?: () => void;
  bodyProps?: RatelTabBodyProp;
  bodyItemProps?: RatelTabBodyItemProp;
  headerProps?: RatelTabHeaderProp;
  headerItemProps?: RatelTabHeaderItemProp;
  children?: React.ReactElement<RatelTabBodyItemProp>;
}

export const RatelTab: React.FC<RatelTabProp> = (props: RatelTabProp) => {
  const {
    elements = [],
    selected,
    onAdd,
    onSelected,
    bodyProps = {},
    bodyItemProps = {},
    headerProps = {},
    headerItemProps = {},
    children,
    ...divProps
  } = props;

  return (
    <RatelTabStyledComponent id="ratel-tab" {...divProps}>
      <RatelTabHeader {...headerProps}>
        {elements.map((element: RatelTabElement) => (
          <RatelTabHeaderItem
            isSelected={selected === element.name}
            onMouseDown={() => {
              onSelected(element.name);
            }}
            {...headerItemProps}
          >
            {element.name}
          </RatelTabHeaderItem>
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
    </RatelTabStyledComponent>
  );
};

export const tabNameGenerator = (elements: RatelTabElement[]): string =>
  `undefined-${
    elements
      .filter((element: RatelTabElement) => {
        // eslint-disable-next-line prefer-regex-literals
        const regex = new RegExp(/undefined-[0-9]+/g);
        return regex.test(element.name);
      })
      .map((element: RatelTabElement) => Number(element.name.split('-')[1]))
      .reduce((prev: number, cur: number) => Math.max(prev, cur), -1) + 1
  }`;

export const nameGenerator = (nameList: string[]): string =>
  `undefined-${
    nameList
      .filter((name: string) => {
        // eslint-disable-next-line prefer-regex-literals
        const regex = new RegExp(/undefined-[0-9]+/g);
        return regex.test(name);
      })
      .map((name: string) => Number(name.split('-')[1]))
      .reduce((prev: number, cur: number) => Math.max(prev, cur), -1) + 1
  }`;
