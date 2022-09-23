import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const RatelCarouselCardStyleComponent = styled.div`
  display: inline-block;
  width: 6rem;
  height: 6rem;
  background-color: aqua;
`;

export type RatelCarouselCardProp = HTMLAttributes<HTMLDivElement>;

export const RatelCarouselCard: React.FC<RatelCarouselCardProp> = (
  props: RatelCarouselCardProp
) => {
  const { children } = props;

  return <RatelCarouselCardStyleComponent>{children}</RatelCarouselCardStyleComponent>;
};
